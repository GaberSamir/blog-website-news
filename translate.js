const translations = {
  ar: {
    "nav-brand": "نبض اليوم",
    "nav-home": "الرئيسية",
    "nav-tech": "تكنولوجيا",
    "nav-travel": "السياحة والسفر",
    "nav-design": "التصميم والفنون",
    "nav-search-placeholder": "ابحث عن مقال...",
    "nav-search-btn": "بحث",
    
    // index.html
    "hero-badge": "المنصة الإخبارية الأولى",
    "hero-title": "اكتشف أحدث المقالات والأخبار العالمية في مكان واحد",
    "hero-desc": "تابع معنا آخر صيحات التكنولوجيا، رحلات السفر الملهمة، وأسرار التصميم المبتكرة من خبراء حول العالم.",
    "hero-btn-browse": "تصفح المقالات",
    "hero-btn-subscribe": "اشترك بالنشرة البريدية",
    "section-badge": "مقالات متميزة",
    "section-title": "آخر ما تم نشره",
    "view-all": "عرض كل المقالات",
    "read-more": "اقرأ المزيد",
    
    "post1-tag": "تكنولوجيا",
    "post1-date": "26 يونيو 2026",
    "post1-readtime": "5 دقائق قراءة",
    "post1-title": "مستقبل الذكاء الاصطناعي في تطوير البرمجيات",
    "post1-desc": "كيف يغير الذكاء الاصطناعي التوليدي طريقة عمل المبرمجين ويساهم في تسريع بناء تطبيقات الويب المعقدة.",
    
    "post2-tag": "سياحة وسفر",
    "post2-date": "24 يونيو 2026",
    "post2-readtime": "8 دقائق قراءة",
    "post2-title": "أفضل 5 وجهات سياحية مخفية لعام 2026",
    "post2-desc": "استكشف معنا جزر وشواطئ خلابة بعيدة عن صخب السياح التقليديين للاستمتاع برحلة هادئة ومميزة للغاية.",
    
    "post3-tag": "تصميم",
    "post3-date": "21 يونيو 2026",
    "post3-readtime": "4 دقائق قراءة",
    "post3-title": "اتجاهات التصميم ثلاثي الأبعاد في الويب الحديث",
    "post3-desc": "نظرة عميقة في كيفية دمج العناصر ثلاثية الأبعاد التفاعلية لتحسين تجربة المستخدم وجعل واجهات الويب نابضة بالحياة.",
    
    "newsletter-title": "لا تفوت أي مقال جديد!",
    "newsletter-desc": "اشترك في نشرتنا البريدية الأسبوعية لتصلك أحدث المقالات والأخبار الحصرية مباشرة إلى بريدك الإلكتروني.",
    "newsletter-placeholder": "عنوان بريدك الإلكتروني...",
    "newsletter-btn": "اشترك الآن",
    
    "footer-desc": "كل ما يهمك معرفته من أخبار وتطورات حول العالم بتصميم راقٍ وتجربة تصفح فريدة.",
    "footer-privacy": "سياسة الخصوصية",
    "footer-contact": "اتصل بنا",
    "footer-rights": "جميع الحقوق محفوظة &copy; 2026 منصة نبض اليوم.",
    
    // travel.html
    "travel-badge": "رحلات ومغامرات",
    "travel-title": "حول العالم في خطوات",
    "travel-desc": "اكتشف معنا قصصاً ملهمة عن السفر والترحال، واطلع على أهم النصائح لرحلتك القادمة وأفضل الوجهات السياحية غير المألوفة.",
    "travel-tag1": "وجهات عالمية",
    "travel-tag2": "نصائح وإرشادات",
    "travel-tag3": "مغامرات وحركة",
    "post-travel2-date": "18 يونيو 2026",
    "post-travel2-readtime": "6 دقائق قراءة",
    "post-travel2-title": "دليل المسافر الذكي: كيف تسافر بميزانية محدودة",
    "post-travel2-desc": "أهم الحيل والنصائح لحجز التذاكر بأسعار رخيصة وتوفير نفقات الإقامة والمعيشة دون التضحية بجودة الرحلة ومتعتها.",
    "post-travel3-date": "12 يونيو 2026",
    "post-travel3-readtime": "10 دقائق قراءة",
    "post-travel3-title": "رحلة إلى أعالي الجبال: تسلق قمم الهيمالايا",
    "post-travel3-desc": "تجربة ملهمة وشخصية تروي مغامرة تسلق القمم الثلجية وتحديات الطبيعة الساحرة والقاسية في آن واحد.",
    
    // technology.html
    "tech-badge": "قسم التقنية الحديثة",
    "tech-title": "عالم التكنولوجيا والبرمجة",
    "tech-desc": "تابع أحدث المستجدات في البرمجة، هندسة البرمجيات، الذكاء الاصطناعي، الأمن السيبراني وكل ما يخص العالم الرقمي.",
    "tech-tag1": "ذكاء اصطناعي",
    "tech-tag2": "أمن سيبراني",
    "tech-tag3": "تطوير الويب",
    "post-tech2-date": "20 يونيو 2026",
    "post-tech2-readtime": "6 دقائق قراءة",
    "post-tech2-title": "كيف تحمي بيانات تطبيقاتك في عصر الحوسبة الكمية",
    "post-tech2-desc": "نظرة سريعة على أهم استراتيجيات التشفير الحديثة لحماية وتأمين خوادم وتطبيقات الويب ضد الاختراقات المستقبلية.",
    "post-tech3-date": "15 يونيو 2026",
    "post-tech3-readtime": "4 دقائق قراءة",
    "post-tech3-title": "ما هو الجديد في معايير HTML5 و CSS4 القادمة؟",
    "post-tech3-desc": "تعرف على أهم التحديثات القادمة لواجهات الويب وما تقدمه من ميزات رائعة للمطورين لتحسين الأداء العام للمواقع.",
    
    // design.html
    "design-badge": "فنون وتصاميم عصرية",
    "design-title": "التصميم الرقمي والواجهات",
    "design-desc": "بوابة إلهامك اليومية لمعرفة أحدث اتجاهات تصميم واجهات وتجربة المستخدم (UI/UX)، التصميم الجرافيكي، والفنون الرقمية الساحرة.",
    "design-tag1": "ثلاثي الأبعاد",
    "design-tag2": "تجربة المستخدم",
    "design-tag3": "تايبوجرافي",
    "post-design2-date": "16 يونيو 2026",
    "post-design2-readtime": "5 دقائق قراءة",
    "post-design2-title": "قواعد سيكولوجية الألوان وتأثيرها على المستخدم",
    "post-design2-desc": "كيف يمكنك كمعماري أو مصمم واجهات اختيار لوحة ألوان دقيقة تزيد من ثقة المستخدم وتقوده لاتخاذ الإجراء المطلوب.",
    "post-design3-date": "10 يونيو 2026",
    "post-design3-readtime": "7 دقائق قراءة",
    "post-design3-title": "فن استخدام الخطوط العربية الرقمية في 2026",
    "post-design3-desc": "نصائح ومعايير هامة للمصممين حول كيفية تنسيق الخطوط العربية للحصول على قراءة مريحة للعين وتصميم عصري متناسق.",
    
    // privacy.html
    "privacy-title": "سياسة الخصوصية",
    "privacy-desc": "توضيح لكيفية جمع واستخدام وحماية بياناتك الشخصية عند تصفح منصة نبض اليوم.",
    "privacy-intro": "تعتبر خصوصية زوارنا ومستخدمينا ذات أهمية بالغة بالنسبة لنا في منصة \"نبض اليوم\". توضح هذه الوثيقة أنواع البيانات الشخصية التي نجمعها وكيف نستخدمها ونحميها.",
    "privacy-h1": "1. البيانات التي نجمعها",
    "privacy-p1": "عند تصفحك للموقع أو تسجيلك في النشرة البريدية أو إضافة تعليق، قد نقوم بجمع بعض البيانات مثل الاسم، عنوان البريد الإلكتروني، وعنوان البروتوكول الرقمي (IP) الخاص بجهازك لغرض تحسين أمان الموقع والتواصل معك.",
    "privacy-h2": "2. ملفات تعريف الارتباط (Cookies)",
    "privacy-p2": "نستخدم ملفات تعريف الارتباط لتخزين معلومات حول تفضيلات الزوار، ولتسجيل معلومات محددة للمستخدم حول الصفحات التي يصل إليها أو يزورها، وذلك لتقديم تجربة تصفح مخصصة وأسرع.",
    "privacy-h3": "3. مشاركة البيانات مع أطراف ثالثة",
    "privacy-p3": "نحن لا نبيع أو نتاجر أو نؤجر بياناتك الشخصية لأي جهة خارجية. قد نستخدم خدمات تحليلات موثوقة (مثل Google Analytics) لدراسة حركة المرور وتحسين أداء الموقع بشكل عام، وهذه الخدمات تخضع لسياسات خصوصية مستقلة.",
    "privacy-h4": "4. أمن وحماية المعلومات",
    "privacy-p4": "نحن نطبق مجموعة من الإجراءات الأمنية المتطورة (بما في ذلك بروتوكول التشفير الآمن SSL) لضمان سلامة بياناتك الشخصية وحمايتها من الوصول غير المصرح به أو التعديل أو الإفشاء.",
    "privacy-h5": "5. حقوقك كمستخدم",
    "privacy-p5": "لديك الحق الكامل في طلب تعديل بياناتك أو حذفها بالكامل من سجلاتنا البريدية بالضغط على رابط \"إلغاء الاشتراك\" الموجود بأسفل كل رسالة بريدية نرسلها، أو من خلال التواصل معنا مباشرة عبر صفحة اتصل بنا.",
    "privacy-h6": "6. التغييرات على سياسة الخصوصية",
    "privacy-p6": "قد نقوم بتحديث هذه السياسة من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب تشغيلية أو قانونية أخرى. ننصحك بمراجعة هذه الصفحة بشكل دوري للاطلاع على أي تحديثات جديدة.",
    
    // contact.html
    "contact-title": "اتصل بنا",
    "contact-desc": "يسعدنا تواصلك معنا دائماً! تفضل بمراسلتنا وسيجيبك فريق الدعم في أقرب وقت ممكن.",
    "contact-h1": "معلومات الاتصال",
    "contact-p1": "يمكنك أيضاً التواصل معنا مباشرة عبر معلومات الاتصال أو زيارة مقرنا الرئيسي:",
    "contact-loc-title": "المقر الرئيسي",
    "contact-loc-val": "حي الصحافة، الرياض، المملكة العربية السعودية",
    "contact-email-title": "البريد الإلكتروني",
    "contact-phone-title": "رقم الهاتف",
    "contact-form-title": "أرسل لنا رسالة",
    "contact-form-name": "الاسم بالكامل",
    "contact-form-name-placeholder": "مثال: أحمد محمد",
    "contact-form-email": "البريد الإلكتروني",
    "contact-form-subject": "عنوان الرسالة",
    "contact-form-subject-placeholder": "ما هو موضوع استفسارك؟",
    "contact-form-msg": "نص الرسالة",
    "contact-form-msg-placeholder": "اكتب تفاصيل استفسارك أو اقتراحك هنا...",
    "contact-form-btn": "إرسال الرسالة",
    
    // article.html
    "article-back": "العودة للرئيسية",
    "article-badge": "مقالات مميزة",
    "article-title": "مستقبل الذكاء الاصطناعي في تطوير البرمجيات",
    "article-author": "أحمد الخالدي",
    "article-date": "26 يونيو 2026",
    "article-readtime": "5 دقائق قراءة",
    "article-p1": "شهد قطاع تطوير البرمجيات طفرات متلاحقة على مر السنين، ولكن لا شيء يضاهي الثورة التي يمر بها حالياً بفضل تقنيات الذكاء الاصطناعي (AI) والذكاء الاصطناعي التوليدي (Generative AI). فما بدأ كأدوات مساعدة بسيطة، تحوّل اليوم إلى ركيزة أساسية يعتمد عليها مبرمجو العصر في كتابة الشفرات، اكتشاف الأخطاء، وإدارة البنية التحتية البرمجية.",
    "article-h2": "شريكك البرمجي الذكي (AI Pair Programming)",
    "article-p2": "أصبح التفاعل مع نماذج مثل ChatGPT و Gemini ومساعدي الأكواد المدمجة (AI Copilots) جزءاً من الروتين اليومي لأي مطور. هذا التغيير لا يعني استبدال المبرمجين البشريين، بل تمكينهم من أداء مهامهم بسرعة تفوق الخيال. بدلاً من قضاء ساعات في البحث عن توثيق لمكتبة معينة أو حل مشكلة برمجية غامضة، يمكن للذكاء الاصطناعي تقديم حلول ومقترحات فورية ودقيقة.",
    "article-quote": "\"إن الذكاء الاصطناعي لا يكتب الكود نيابة عنك فحسب، بل يجعلك تفكر بطرق أكثر ذكاءً وإبداعاً لحل المشكلات المعقدة التي كانت تستهلك وقتك الثمين.\"",
    "article-h3": "تحليل الأخطاء والأمان الاستباقي",
    "article-p3": "أحد أكبر التحديات في هندسة البرمجيات هو اكتشاف الثغرات الأمنية والأخطاء الخفية قبل وصول التطبيق لبيئة الإنتاج. تعمل النماذج الذكية الآن على فحص الشفرات البرمجية فور كتابتها واكتشاف الثغرات المنطقية وتوفير حلول ترقيعية فورية لحماية البيانات. يساهم ذلك في بناء برمجيات أكثر استقراراً وأماناً من أي وقت مضى.",
    "article-h4": "الخاتمة: تبنَّ التغيير لتبقى في المقدمة",
    "article-p4": "مستقبل تطوير البرمجيات لا يتمحور حول كتابة الأكواد بل حول حل المشكلات وتصميم البنية الهندسية للتطبيقات. المطورون الذين يتقنون دمج الذكاء الاصطناعي في سير عملهم اليومي هم من سيقودون عجلة الابتكار والتحول الرقمي في الغد.",
    "article-share": "شارك المقال:",
    "article-share-twitter": "تويتر (X)",
    "article-share-fb": "فيسبوك",
    "article-share-li": "لينكد إن",
    "article-comments-title": "التعليقات (2)",
    "comment1-author": "محمد عبد الرحمن",
    "comment1-time": "قبل ساعتين",
    "comment1-text": "مقال رائع جداً ومحفز! فعلاً استخدام الذكاء الاصطناعي في سير العمل ضاعف من إنتاجيتي في العمل اليومي كمهندس برمجيات.",
    "comment2-author": "سارة العتيبي",
    "comment2-time": "قبل 4 ساعات",
    "comment2-text": "أتفق تماماً مع الكاتب، الأهم هو تنمية مهارات حل المشكلات والتفكير المنطقي لأن التوليد والتنفيذ الفني أصبح أسرع بكثير اليوم.",
    "comment-form-title": "أضف تعليقك",
    "comment-form-msg-placeholder": "اكتب تعليقك هنا...",
    "comment-form-name-placeholder": "الاسم الكريم",
    "comment-form-email-placeholder": "البريد الإلكتروني",
    "comment-form-btn": "إرسال التعليق",
    "article-avatar": "أ",
    "comment1-avatar": "م",
    "comment2-avatar": "س"
  },
  en: {
    "nav-brand": "Nabd Al-Youm",
    "nav-home": "Home",
    "nav-tech": "Technology",
    "nav-travel": "Travel",
    "nav-design": "Design",
    "nav-search-placeholder": "Search for article...",
    "nav-search-btn": "Search",
    
    // index.html
    "hero-badge": "First News Platform",
    "hero-title": "Discover the latest global articles and news in one place",
    "hero-desc": "Follow with us the latest technology trends, inspiring travels, and innovative design secrets from experts around the world.",
    "hero-btn-browse": "Browse Articles",
    "hero-btn-subscribe": "Subscribe to Newsletter",
    "section-badge": "Featured Articles",
    "section-title": "Latest Publications",
    "view-all": "View All Articles",
    "read-more": "Read More",
    
    "post1-tag": "Technology",
    "post1-date": "June 26, 2026",
    "post1-readtime": "5 min read",
    "post1-title": "The Future of AI in Software Development",
    "post1-desc": "How generative AI is changing the way developers work and accelerating the building of complex web applications.",
    
    "post2-tag": "Travel",
    "post2-date": "June 24, 2026",
    "post2-readtime": "8 min read",
    "post2-title": "The 5 Best Hidden Travel Destinations for 2026",
    "post2-desc": "Explore with us stunning islands and beaches far from traditional tourist crowds to enjoy a very quiet and unique trip.",
    
    "post3-tag": "Design",
    "post3-date": "June 21, 2026",
    "post3-readtime": "4 min read",
    "post3-title": "3D Design Trends in the Modern Web",
    "post3-desc": "A deep look into integrating interactive 3D elements to improve user experience and make web interfaces vibrant.",
    
    "newsletter-title": "Never miss a new article!",
    "newsletter-desc": "Subscribe to our weekly newsletter to receive the latest articles and exclusive news directly in your inbox.",
    "newsletter-placeholder": "Your email address...",
    "newsletter-btn": "Subscribe Now",
    
    "footer-desc": "Everything you need to know about news and developments around the world with a refined design and a unique browsing experience.",
    "footer-privacy": "Privacy Policy",
    "footer-contact": "Contact Us",
    "footer-rights": "All rights reserved &copy; 2026 Nabd Al-Youm Platform.",
    
    // travel.html
    "travel-badge": "Trips & Adventures",
    "travel-title": "Around the World in Steps",
    "travel-desc": "Discover inspiring stories about travel and trekking, and learn the most important tips for your next trip and best off-the-beaten-path destinations.",
    "travel-tag1": "Global Destinations",
    "travel-tag2": "Tips & Guidelines",
    "travel-tag3": "Adventures & Action",
    "post-travel2-date": "June 18, 2026",
    "post-travel2-readtime": "6 min read",
    "post-travel2-title": "The Smart Traveler's Guide: How to Travel on a Budget",
    "post-travel2-desc": "The most important tricks and tips for booking cheap tickets and saving on accommodation and living costs without sacrificing the quality and enjoyment of the trip.",
    "post-travel3-date": "June 12, 2026",
    "post-travel3-readtime": "10 min read",
    "post-travel3-title": "Journey to the High Mountains: Climbing the Himalayas",
    "post-travel3-desc": "An inspiring and personal experience telling the adventure of climbing snowy peaks and the challenges of beautiful and harsh nature.",
    
    // technology.html
    "tech-badge": "Modern Technology",
    "tech-title": "The World of Technology & Programming",
    "tech-desc": "Follow the latest developments in programming, software engineering, artificial intelligence, cyber security, and everything digital.",
    "tech-tag1": "Artificial Intelligence",
    "tech-tag2": "Cyber Security",
    "tech-tag3": "Web Development",
    "post-tech2-date": "June 20, 2026",
    "post-tech2-readtime": "6 min read",
    "post-tech2-title": "How to Protect Your Application Data in the Era of Quantum Computing",
    "post-tech2-desc": "A quick look at the most important modern encryption strategies to protect and secure servers and web applications against future hacks.",
    "post-tech3-date": "June 15, 2026",
    "post-tech3-readtime": "4 min read",
    "post-tech3-title": "What's New in the Upcoming HTML5 & CSS4 Standards?",
    "post-tech3-desc": "Learn about the most important upcoming updates for web interfaces and what they offer developers to improve overall site performance.",
    
    // design.html
    "design-badge": "Modern Arts & Designs",
    "design-title": "Digital Design & Interfaces",
    "design-desc": "Your daily inspiration gateway to discover the latest UI/UX design trends, graphic design, and enchanting digital arts.",
    "design-tag1": "3D Design",
    "design-tag2": "User Experience",
    "design-tag3": "Typography",
    "post-design2-date": "June 16, 2026",
    "post-design2-readtime": "5 min read",
    "post-design2-title": "Color Psychology Rules and Their Impact on the User",
    "post-design2-desc": "How you as an architect or UI designer can choose a precise color palette that increases user trust and guides them to take the required action.",
    "post-design3-date": "June 10, 2026",
    "post-design3-readtime": "7 min read",
    "post-design3-title": "The Art of Using Digital Arabic Fonts in 2026",
    "post-design3-desc": "Important tips and standards for designers on how to format Arabic fonts for a comfortable reading experience and a consistent modern design.",
    
    // privacy.html
    "privacy-title": "Privacy Policy",
    "privacy-desc": "Clarification of how we collect, use, and protect your personal data when browsing Nabd Al-Youm.",
    "privacy-intro": "The privacy of our visitors and users is of utmost importance to us at Nabd Al-Youm. This document explains the types of personal data we collect, how we use it, and how we protect it.",
    "privacy-h1": "1. Data We Collect",
    "privacy-p1": "When you browse the site, register for the newsletter, or add a comment, we may collect some data such as your name, email address, and IP address to improve site security and communicate with you.",
    "privacy-h2": "2. Cookies",
    "privacy-p2": "We use cookies to store information about visitors' preferences and to record user-specific information on which pages they access or visit, in order to provide a personalized and faster browsing experience.",
    "privacy-h3": "3. Sharing Data with Third Parties",
    "privacy-p3": "We do not sell, trade, or rent your personal data to any third party. We may use trusted analytics services (such as Google Analytics) to study traffic and improve overall site performance, which are subject to independent privacy policies.",
    "privacy-h4": "4. Information Security and Protection",
    "privacy-p4": "We apply a range of advanced security measures (including SSL encryption protocol) to ensure the safety of your personal data and protect it from unauthorized access, modification, or disclosure.",
    "privacy-h5": "5. Your Rights as a User",
    "privacy-p5": "You have the full right to request modification or complete deletion of your data from our mailing lists by clicking the 'Unsubscribe' link at the bottom of every email we send, or by contacting us directly through the Contact Us page.",
    "privacy-h6": "6. Changes to the Privacy Policy",
    "privacy-p6": "We may update this policy from time to time to reflect changes in our practices or for other operational or legal reasons. We advise you to review this page periodically to keep abreast of any new updates.",
    
    // contact.html
    "contact-title": "Contact Us",
    "contact-desc": "We are always happy to hear from you! Please message us and the support team will reply as soon as possible.",
    "contact-h1": "Contact Info",
    "contact-p1": "You can also contact us directly via contact information or visit our main office:",
    "contact-loc-title": "Main Office",
    "contact-loc-val": "Al-Sahafa District, Riyadh, Saudi Arabia",
    "contact-email-title": "Email",
    "contact-phone-title": "Phone Number",
    "contact-form-title": "Send us a message",
    "contact-form-name": "Full Name",
    "contact-form-name-placeholder": "e.g., John Doe",
    "contact-form-email": "Email",
    "contact-form-subject": "Subject",
    "contact-form-subject-placeholder": "What is the subject of your inquiry?",
    "contact-form-msg": "Message",
    "contact-form-msg-placeholder": "Write the details of your inquiry or suggestion here...",
    "contact-form-btn": "Send Message",
    
    // article.html
    "article-back": "Return to Home",
    "article-badge": "Featured Articles",
    "article-title": "The Future of AI in Software Development",
    "article-author": "Ahmed Al-Khalidi",
    "article-date": "June 26, 2026",
    "article-readtime": "5 min read",
    "article-p1": "The software development sector has witnessed successive leaps over the years, but nothing compares to the revolution it is currently undergoing thanks to artificial intelligence (AI) and generative AI technologies. What started as simple helper tools has today turned into a core pillar that modern programmers rely on to write code, detect errors, and manage software infrastructure.",
    "article-h2": "Your Smart Software Partner (AI Pair Programming)",
    "article-p2": "Interacting with models like ChatGPT, Gemini, and integrated code assistants (AI Copilots) has become part of the daily routine for any developer. This change does not mean replacing human programmers, but rather enabling them to perform their tasks at speeds beyond imagination. Instead of spending hours searching for documentation for a specific library or resolving a mysterious programming issue, AI can provide immediate and accurate solutions and suggestions.",
    "article-quote": "\"AI doesn't just write the code for you, it makes you think in smarter and more creative ways to solve complex problems that used to consume your valuable time.\"",
    "article-h3": "Error Analysis and Proactive Security",
    "article-p3": "One of the biggest challenges in software engineering is detecting vulnerabilities and hidden errors before the application reaches the production environment. Smart models now scan code as it is written, discover logical gaps, and provide immediate patches to protect data. This contributes to building more stable and secure software than ever before.",
    "article-h4": "Conclusion: Embrace Change to Stay Ahead",
    "article-p4": "The future of software engineering is not centered around writing code but around solving problems and designing application architecture. Developers who master integrating AI into their daily workflow are the ones who will lead the wheel of innovation and digital transformation tomorrow.",
    "article-share": "Share Article:",
    "article-share-twitter": "Twitter (X)",
    "article-share-fb": "Facebook",
    "article-share-li": "LinkedIn",
    "article-comments-title": "Comments (2)",
    "comment1-author": "Mohamed Abdel-Rahman",
    "comment1-time": "2 hours ago",
    "comment1-text": "A very wonderful and motivating article! Indeed, using AI in the workflow has doubled my productivity in daily work as a software engineer.",
    "comment2-author": "Sarah Al-Otaibi",
    "comment2-time": "4 hours ago",
    "comment2-text": "I fully agree with the author. The most important thing is to develop problem-solving and logical thinking skills because generation and technical execution have become much faster today.",
    "comment-form-title": "Add your comment",
    "comment-form-msg-placeholder": "Write your comment here...",
    "comment-form-name-placeholder": "Your Name",
    "comment-form-email-placeholder": "Email Address",
    "comment-form-btn": "Submit Comment",
    "article-avatar": "A",
    "comment1-avatar": "M",
    "comment2-avatar": "S"
  }
};

// Initialize Language
let currentLang = localStorage.getItem('site-lang') || 'ar';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site-lang', lang);
  
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
  // Toggle layout class for body (used for spacing alignment adjustments)
  if (lang === 'en') {
    document.body.classList.add('lang-en');
    document.body.classList.remove('lang-ar');
  } else {
    document.body.classList.add('lang-ar');
    document.body.classList.remove('lang-en');
  }

  // Update navbar toggler layout class if needed
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.innerText = lang === 'ar' ? 'EN' : 'عربي';
  }

  // Translate all tags with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      elem.innerHTML = translations[lang][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
    const key = elem.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      elem.setAttribute('placeholder', translations[lang][key]);
    }
  });
}

// Initialize Dark Mode
let isDark = localStorage.getItem('site-theme') === 'dark';

function setTheme(dark) {
  isDark = dark;
  localStorage.setItem('site-theme', dark ? 'dark' : 'light');
  
  const html = document.documentElement;
  const toggleBtn = document.getElementById('darkModeToggle');
  
  if (dark) {
    html.setAttribute('data-bs-theme', 'dark');
    if (toggleBtn) {
      toggleBtn.innerHTML = '<i class="fa-solid fa-sun fs-5"></i>';
      toggleBtn.classList.remove('text-dark');
      toggleBtn.classList.add('text-warning');
    }
  } else {
    html.removeAttribute('data-bs-theme');
    if (toggleBtn) {
      toggleBtn.innerHTML = '<i class="fa-solid fa-moon fs-5"></i>';
      toggleBtn.classList.remove('text-warning');
      toggleBtn.classList.add('text-dark');
    }
  }
}

// Event Listeners on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  // Set initial state
  setLanguage(currentLang);
  setTheme(isDark);

  // Setup Language switch event
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const newLang = currentLang === 'ar' ? 'en' : 'ar';
      setLanguage(newLang);
    });
  }

  // Setup Theme switch event
  const themeToggle = document.getElementById('darkModeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      setTheme(!isDark);
    });
  }
});

// Expose the public API for testing in CommonJS environments (e.g. Jest).
// In the browser this block is skipped and the script behaves as before.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, setLanguage, setTheme };
}
