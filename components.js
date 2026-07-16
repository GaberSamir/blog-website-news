// Shared layout components (navbar, breadcrumb, footer).
// Each page drops placeholder elements such as <div data-include="navbar"></div>
// and this script renders the shared markup into them before translate.js runs,
// so the injected [data-i18n] nodes get picked up by the translation pass.

const NAV_LINKS = [
  { href: "index.html", icon: "fa-house", i18n: "nav-home", label: "الرئيسية" },
  { href: "technology.html", icon: "fa-laptop-code", i18n: "nav-tech", label: "تكنولوجيا" },
  { href: "travel.html", icon: "fa-plane-departure", i18n: "nav-travel", label: "السياحة والسفر" },
  { href: "design.html", icon: "fa-palette", i18n: "nav-design", label: "التصميم والفنون" },
];

// Returns the current page name without extension. Works with both
// "technology.html" and Vercel clean URLs like "/technology" or "/".
function currentPage() {
  const path = window.location.pathname.split("/").pop().replace(/\.html$/, "");
  return path.length ? path : "index";
}

function navbarHTML() {
  const active = currentPage();
  const items = NAV_LINKS.map(({ href, icon, i18n, label }) => {
    const isActive = href.replace(/\.html$/, "") === active;
    const cls = isActive ? "nav-link active px-3" : "nav-link px-3";
    const current = isActive ? ' aria-current="page"' : "";
    return `
          <li class="nav-item">
            <a class="${cls}"${current} href="${href}"><i class="fa-solid ${icon} me-1"></i><span data-i18n="${i18n}">${label}</span></a>
          </li>`;
  }).join("");

  return `
  <nav class="navbar navbar-expand-lg premium-navbar sticky-top py-3">
    <div class="container">
      <a class="navbar-brand fs-3 fw-bold" href="index.html"><i class="fa-solid fa-heart-pulse text-primary me-2"></i><span data-i18n="nav-brand">نبض اليوم</span></a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 pe-0">${items}
        </ul>
        <form class="d-flex align-items-center mb-2 mb-lg-0" role="search">
          <div class="input-group">
            <input class="form-control bg-light border-0" type="search" placeholder="ابحث عن مقال..." aria-label="ابحث عن مقال" data-i18n-placeholder="nav-search-placeholder">
            <button class="btn btn-primary" type="submit" aria-label="بحث"><i class="fa-solid fa-magnifying-glass me-1"></i><span data-i18n="nav-search-btn">بحث</span></button>
          </div>
        </form>
        <div class="d-flex align-items-center gap-2 ms-lg-3">
          <button class="btn btn-link text-dark p-2" id="darkModeToggle" aria-label="Toggle dark mode">
            <i class="fa-solid fa-moon fs-5"></i>
          </button>
          <button class="btn btn-outline-primary btn-sm px-3 rounded-pill" id="langToggle" aria-label="Toggle language">
            EN
          </button>
        </div>
      </div>
    </div>
  </nav>`;
}

function breadcrumbHTML(current) {
  return `
  <nav aria-label="مسار التنقل" class="bg-light border-bottom">
    <div class="container py-2">
      <ol class="breadcrumb mb-0 small">
        <li class="breadcrumb-item"><a href="index.html" class="text-decoration-none"><i class="fa-solid fa-house me-1"></i>الرئيسية</a></li>
        <li class="breadcrumb-item active" aria-current="page">${current}</li>
      </ol>
    </div>
  </nav>`;
}

function footerHTML() {
  return `
  <footer class="bg-dark text-white py-5">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md-4 text-center text-md-start mb-3 mb-md-0">
          <span class="fs-4 fw-bold"><i class="fa-solid fa-heart-pulse text-primary me-2"></i><span data-i18n="nav-brand">نبض اليوم</span></span>
          <p class="text-muted mt-2 small" data-i18n="footer-desc">كل ما يهمك معرفته من أخبار وتطورات حول العالم بتصميم راقٍ وتجربة تصفح فريدة.</p>
          <div class="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
            <a href="#" class="text-white opacity-75 hover-primary fs-5" aria-label="تويتر"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#" class="text-white opacity-75 hover-primary fs-5" aria-label="فيسبوك"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="text-white opacity-75 hover-primary fs-5" aria-label="إنستغرام"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="text-white opacity-75 hover-primary fs-5" aria-label="لينكد إن"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="col-md-4 text-center mb-3 mb-md-0">
          <div class="d-flex justify-content-center gap-3">
            <a href="index.html" class="text-white text-decoration-none small" data-i18n="nav-home">الرئيسية</a>
            <span class="text-muted">|</span>
            <a href="privacy.html" class="text-white text-decoration-none small" data-i18n="footer-privacy">سياسة الخصوصية</a>
            <span class="text-muted">|</span>
            <a href="contact.html" class="text-white text-decoration-none small" data-i18n="footer-contact">اتصل بنا</a>
          </div>
        </div>
        <div class="col-md-4 text-center text-md-end text-muted small" data-i18n="footer-rights">
          جميع الحقوق محفوظة &copy; 2026 منصة نبض اليوم.
        </div>
      </div>
    </div>
  </footer>`;
}

function renderComponent(el) {
  switch (el.getAttribute("data-include")) {
    case "navbar":
      el.outerHTML = navbarHTML();
      break;
    case "breadcrumb":
      el.outerHTML = breadcrumbHTML(el.getAttribute("data-current") || "");
      break;
    case "footer":
      el.outerHTML = footerHTML();
      break;
  }
}

document.querySelectorAll("[data-include]").forEach(renderComponent);
