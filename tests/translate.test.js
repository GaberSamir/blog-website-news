/**
 * Unit tests for translate.js — the site's language switching and dark mode logic.
 *
 * translate.js is a browser script that runs top-level code on load (reading
 * localStorage and registering a DOMContentLoaded handler). We reset the module
 * registry and the jsdom document/localStorage before each test so every case
 * starts from a clean, deterministic state.
 */

const path = require('path');

const TRANSLATE_PATH = path.join(__dirname, '..', 'translate.js');

function loadModule() {
  let mod;
  jest.isolateModules(() => {
    mod = require(TRANSLATE_PATH);
  });
  return mod;
}

beforeEach(() => {
  localStorage.clear();
  document.documentElement.innerHTML = '<head></head><body></body>';
  document.documentElement.removeAttribute('lang');
  document.documentElement.removeAttribute('dir');
  document.documentElement.removeAttribute('data-bs-theme');
});

describe('translations dictionary', () => {
  test('exposes both Arabic and English dictionaries', () => {
    const { translations } = loadModule();
    expect(translations).toHaveProperty('ar');
    expect(translations).toHaveProperty('en');
  });

  test('Arabic and English dictionaries share the exact same set of keys', () => {
    const { translations } = loadModule();
    const arKeys = Object.keys(translations.ar).sort();
    const enKeys = Object.keys(translations.en).sort();
    expect(arKeys).toEqual(enKeys);
  });

  test('no translation value is empty', () => {
    const { translations } = loadModule();
    for (const lang of ['ar', 'en']) {
      for (const [key, value] of Object.entries(translations[lang])) {
        expect(typeof value).toBe('string');
        expect(value.trim().length).toBeGreaterThan(0);
      }
    }
  });

  test('a few known keys map to the expected strings', () => {
    const { translations } = loadModule();
    expect(translations.en['nav-home']).toBe('Home');
    expect(translations.ar['nav-home']).toBe('الرئيسية');
    expect(translations.en['nav-search-btn']).toBe('Search');
  });
});

describe('setLanguage', () => {
  test('English: sets lang/dir attributes and body classes and persists choice', () => {
    const { setLanguage } = loadModule();
    setLanguage('en');

    expect(document.documentElement.getAttribute('lang')).toBe('en');
    expect(document.documentElement.getAttribute('dir')).toBe('ltr');
    expect(document.body.classList.contains('lang-en')).toBe(true);
    expect(document.body.classList.contains('lang-ar')).toBe(false);
    expect(localStorage.getItem('site-lang')).toBe('en');
  });

  test('Arabic: sets rtl direction and Arabic body class', () => {
    const { setLanguage } = loadModule();
    setLanguage('ar');

    expect(document.documentElement.getAttribute('lang')).toBe('ar');
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
    expect(document.body.classList.contains('lang-ar')).toBe(true);
    expect(document.body.classList.contains('lang-en')).toBe(false);
    expect(localStorage.getItem('site-lang')).toBe('ar');
  });

  test('translates innerHTML of elements carrying data-i18n', () => {
    document.body.innerHTML =
      '<h1 data-i18n="nav-home"></h1><a data-i18n="nav-search-btn"></a>';
    const { setLanguage } = loadModule();

    setLanguage('en');
    expect(document.querySelector('[data-i18n="nav-home"]').innerHTML).toBe('Home');
    expect(document.querySelector('[data-i18n="nav-search-btn"]').innerHTML).toBe('Search');

    setLanguage('ar');
    expect(document.querySelector('[data-i18n="nav-home"]').innerHTML).toBe('الرئيسية');
  });

  test('translates the placeholder attribute of elements with data-i18n-placeholder', () => {
    document.body.innerHTML =
      '<input data-i18n-placeholder="nav-search-placeholder" />';
    const { setLanguage } = loadModule();

    setLanguage('en');
    expect(document.querySelector('input').getAttribute('placeholder')).toBe(
      'Search for article...'
    );
  });

  test('leaves elements untouched when the key is missing from the dictionary', () => {
    document.body.innerHTML = '<span data-i18n="does-not-exist">original</span>';
    const { setLanguage } = loadModule();

    setLanguage('en');
    expect(document.querySelector('span').innerHTML).toBe('original');
  });

  test('leaves the placeholder untouched when its key is missing', () => {
    document.body.innerHTML =
      '<input data-i18n-placeholder="does-not-exist" placeholder="original" />';
    const { setLanguage } = loadModule();

    setLanguage('en');
    expect(document.querySelector('input').getAttribute('placeholder')).toBe('original');
  });

  test('updates the language toggle button label to the opposite language', () => {
    document.body.innerHTML = '<button id="langToggle"></button>';
    const { setLanguage } = loadModule();

    setLanguage('ar');
    expect(document.getElementById('langToggle').innerText).toBe('EN');

    setLanguage('en');
    expect(document.getElementById('langToggle').innerText).toBe('عربي');
  });

  test('does not throw when the language toggle button is absent', () => {
    const { setLanguage } = loadModule();
    expect(() => setLanguage('en')).not.toThrow();
  });
});

describe('setTheme', () => {
  test('dark mode: sets data-bs-theme and persists the theme', () => {
    const { setTheme } = loadModule();
    setTheme(true);

    expect(document.documentElement.getAttribute('data-bs-theme')).toBe('dark');
    expect(localStorage.getItem('site-theme')).toBe('dark');
  });

  test('light mode: removes data-bs-theme and persists the theme', () => {
    const { setTheme } = loadModule();
    setTheme(true);
    setTheme(false);

    expect(document.documentElement.hasAttribute('data-bs-theme')).toBe(false);
    expect(localStorage.getItem('site-theme')).toBe('light');
  });

  test('dark mode: renders the sun icon and warning color on the toggle button', () => {
    document.body.innerHTML =
      '<button id="darkModeToggle" class="text-dark"></button>';
    const { setTheme } = loadModule();

    setTheme(true);
    const btn = document.getElementById('darkModeToggle');
    expect(btn.innerHTML).toContain('fa-sun');
    expect(btn.classList.contains('text-warning')).toBe(true);
    expect(btn.classList.contains('text-dark')).toBe(false);
  });

  test('light mode: renders the moon icon and dark color on the toggle button', () => {
    document.body.innerHTML =
      '<button id="darkModeToggle" class="text-warning"></button>';
    const { setTheme } = loadModule();

    setTheme(false);
    const btn = document.getElementById('darkModeToggle');
    expect(btn.innerHTML).toContain('fa-moon');
    expect(btn.classList.contains('text-dark')).toBe(true);
    expect(btn.classList.contains('text-warning')).toBe(false);
  });

  test('does not throw when the theme toggle button is absent', () => {
    const { setTheme } = loadModule();
    expect(() => setTheme(true)).not.toThrow();
    expect(() => setTheme(false)).not.toThrow();
  });
});

describe('DOMContentLoaded wiring', () => {
  test('clicking the language toggle switches between Arabic and English', () => {
    localStorage.setItem('site-lang', 'ar');
    document.body.innerHTML =
      '<button id="langToggle"></button><h1 data-i18n="nav-home"></h1>';

    loadModule();
    document.dispatchEvent(new Event('DOMContentLoaded'));

    // Initial render applied the stored Arabic language.
    expect(document.getElementById('langToggle').innerText).toBe('EN');
    expect(document.querySelector('[data-i18n="nav-home"]').innerHTML).toBe('الرئيسية');

    document.getElementById('langToggle').click();
    expect(document.documentElement.getAttribute('lang')).toBe('en');
    expect(document.querySelector('[data-i18n="nav-home"]').innerHTML).toBe('Home');
  });

  test('clicking the dark mode toggle switches the theme on and off', () => {
    document.body.innerHTML = '<button id="darkModeToggle"></button>';

    loadModule();
    document.dispatchEvent(new Event('DOMContentLoaded'));

    const btn = document.getElementById('darkModeToggle');
    btn.click();
    expect(document.documentElement.getAttribute('data-bs-theme')).toBe('dark');
    expect(localStorage.getItem('site-theme')).toBe('dark');

    btn.click();
    expect(document.documentElement.hasAttribute('data-bs-theme')).toBe(false);
    expect(localStorage.getItem('site-theme')).toBe('light');
  });
});
