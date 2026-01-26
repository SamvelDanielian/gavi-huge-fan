const categoryMap = {
  en: {
    "Exclusive": "Exclusive",
    "Injury News": "Injury News",
    "Account": "Account",
    "Club": "Club",
    "Friends & Family": "Friends & Family",
    "Match Day": "Match Day",
    "All": "All"
  },
  es: {
    "Exclusive": "Exclusiva",
    "Injury News": "Noticias de lesión",
    "Account": "Cuenta",
    "Club": "Club",
    "Friends & Family": "Familia y Amigos",
    "Match Day": "Día de partido",
    "All": "Todo"
  }
};

const translations = {
  en: {
    siteTitle: "PABLO GAVI'S HUGE FAN",
    navHome: "HOME",
    navNews: "NEWS",
    navMatches: "MATCHES",
    navTrainings: "TRAININGS",
    navGavi: "GAVI",
    navEdits: "EDITS",

    welcomeTo: "WELCOME TO",
    everythingAbout: "Everything about Pablo Gavi here",
    latestNewsBtn: "LATEST NEWS",

    nextMatch: "NEXT MATCH",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    matchDetails: "Match details",

    latestNews: "Latest News",
    seeAllNews: "See all news →",
    injuryNews: "Injury News",
    insideClub: "Club",
    exclusive: "Exclusive",

    featuredEdits: "Featured Edits",
    seeAllEdits: "See all edits →",
    edit1Title: "Gavi Huge Fan account is back!",
    edit2Title: "Today's edit",
    edit3Title: "Pedri x Gavi collage hits top",

    gaviSnapshot: "Gavi Snapshot",
    fullStats: "Full stats & bio →",
    age: "Age",
    number: "Shirt Number",
    midfielder: "Midfielder",
    position: "Position",
    club: "Club",

    footerMadeBy: "© 2025 GaviHugeFan | Made by GHF",
    footerFollow: "Follow on instagram to get the fastest updates",

    news: "News",
    filterAll: "All",
    filterInjury: "Injury News",
    filterAccount: "Account",
    filterClub: "Club",
    filterFamily: "Friends & Family",
    filterExclusive: "Exclusive",
    filterMatch: "Match Day",

    back_to_news: "← Back to News",
    home: "Home",
    news: "News",
    related_articles_title: "Related Articles",
    comments_title: "Comments",
    no_comments: "There are no comments yet.",
    comment_placeholder: "Write a comment...",
    share_article: "Share this Article",
    post_comment: "Post Comment",

    matches_title: "Matches",

    watchTrainingVideo: "WATCH TRAINING VIDEO",
    todaysTraining: "TODAY'S TRAINING",
    trainingSubtitle: "Exclusive daily sessions from Ciutat Esportiva",
    gavisTrainings: "GAVI'S TRAININGS",
    trainingTwo: "TRAINING OF NOVEMBER 30",
    trainingThree: "TRAINING OF MARCH 15"
  },

  es: {
    siteTitle: "GRAN FAN DE PABLO GAVI",
    navHome: "INICIO",
    navNews: "NOTICIAS",
    navMatches: "PARTIDOS",
    navTrainings: "ENTRENAMIENTOS",
    navGavi: "GAVI",
    navEdits: "EDICIONES",

    welcomeTo: "BIENVENIDO A",
    everythingAbout: "Todo sobre Pablo Gavi aquí",
    latestNewsBtn: "ÚLTIMAS NOTICIAS",

    nextMatch: "PRÓXIMO PARTIDO",
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    matchDetails: "Detalles del partido",

    latestNews: "Últimas Noticias",
    seeAllNews: "Ver todas →",
    injuryNews: "Noticias de lesión",
    insideClub: "Club",
    exclusive: "Exclusiva",

    featuredEdits: "Ediciones Destacadas",
    seeAllEdits: "Ver todas →",
    edit1Title: "¡La cuenta Gavi Huge Fan ha vuelto!",
    edit2Title: "Edición de hoy",
    edit3Title: "El collage Pedri x Gavi llega a la cima",

    gaviSnapshot: "Resumen de Gavi",
    fullStats: "Estadísticas completas →",
    age: "Años",
    number: "Número",
    midfielder: "Centrocampista",
    position: "Posición",
    club: "Club",

    footerMadeBy: "© 2025 GaviHugeFan | Hecho por GHF",
    footerFollow: "Sígueme en instagram para obtener las actualizaciones más rápidas",

    news: "Noticias",
    filterAll: "Todo",
    filterInjury: "Noticias de lesión",
    filterAccount: "Cuenta",
    filterClub: "Club",
    filterFamily: "Familia y Amigos",
    filterExclusive: "Exclusiva",
    filterMatch: "Día de partido",

    back_to_news: "← Volver a Noticias",
    home: "Inicio",
    news: "Noticias",
    related_articles_title: "Artículos Relacionados",
    comments_title: "Comentarios",
    no_comments: "Aún no hay comentarios.",
    comment_placeholder: "Escribe un comentario...",
    share_article: "Comparte este Artículo",
    post_comment: "Publicar Comentario",

    matches_title: "Partidos",

    watchTrainingVideo: "VER VIDEO DEL ENTRENAMIENTO",
    todaysTraining: "ENTRENAMIENTO DE HOY",
    trainingSubtitle: "Sesiones diarias exclusivas desde la Ciutat Esportiva",
    gavisTrainings: "ENTRENAMIENTOS DE GAVI",
    trainingTwo: "ENTRENAMIENTO DEL 30 DE NOVIEMBRE",
    trainingThree: "ENTRENAMIENTO DEL 15 DE MARZO"
  }
};

function getCurrentLanguage() {
  return localStorage.getItem("language") || "en";
}

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });

  localStorage.setItem("language", lang);
}

/* ============================
   NEWS PAGINATION + TRANSLATION
   ============================ */

let allNews = [];
let newsTranslations = {};
let currentPage = 1;
let currentFilter = "All"; // canonical category (EN)
const newsPerPage = 9;

function initNews() {
  // Only run on pages that actually have news grid
  const grid = document.querySelector(".news-grid");
  if (!grid) return;

  // Fetch base English news
  fetch("data/news.json")
    .then(res => res.json())
    .then(data => {
      allNews = data || [];
      // Then fetch translations (optional)
      return fetch("data/news_translations.json");
    })
    .then(res => res.json())
    .then(tr => {
      newsTranslations = tr || {};
      prepareFilterButtons();
      renderNews();
      setupFilterButtons();
    })
    .catch(err => {
      console.error("Error loading news or translations:", err);
      // Even if translations fail, at least show English
      prepareFilterButtons();
      renderNews();
      setupFilterButtons();
    });
}

function prepareFilterButtons() {
  // Save canonical filter in data-filter (so translation of button text won't break filtering)
  document.querySelectorAll(".news-filter-btn").forEach(btn => {
    if (!btn.dataset.filter) {
      btn.dataset.filter = btn.textContent.trim();
    }
  });
}

function getFilteredNews() {
    const lang = getCurrentLanguage();
    const translatedFilter = categoryMap[lang][currentFilter] || currentFilter;

    if (translatedFilter === categoryMap[lang]["All"]) {
        return allNews;
    }

    return allNews.filter(n => {
        const nDisplay = getDisplayArticleData(n);
        return nDisplay.category === translatedFilter;
    });
}

function getDisplayArticleData(article) {
  const lang = getCurrentLanguage();
  if (lang !== "es") return article;

  const t = newsTranslations[article.slug];
  if (!t) return article;

  return {
    ...article,
    title: t.title_es || article.title,
    text: t.text_es || article.text,
    fullText: t.fullText_es || article.fullText,
    category: t.category_es || article.category,
    tags: t.tags_es || article.tags
  };
}

function renderNews() {
  const grid = document.querySelector(".news-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = getFilteredNews();
  const totalPages = Math.ceil(filtered.length / newsPerPage) || 1;
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * newsPerPage;
  const end = start + newsPerPage;

  const pageItems = filtered.slice(start, end);

  const col1 = document.createElement("div");
  const col2 = document.createElement("div");
  const col3 = document.createElement("div");

  col1.classList.add("news-column");
  col2.classList.add("news-column");
  col3.classList.add("news-column");

  const cols = [col1, col2, col3];
  let colIndex = 0;

  pageItems.forEach(item => {
    const display = getDisplayArticleData(item);

    const card = document.createElement("article");
    card.className = "news-card news-md";

    card.innerHTML = `
      <a href="news/index.html?slug=${item.slug}" class="news-link">
        <img src="${item.img}" alt="${display.title}">
        <div class="news-card-content">
          <div class="news-tag">${display.category}</div>
          <div class="news-title">${display.title}</div>
          <p class="news-text">${display.text}</p>
        </div>
      </a>
    `;

    cols[colIndex].appendChild(card);
    colIndex = (colIndex + 1) % 3;
  });

  grid.appendChild(col1);
  grid.appendChild(col2);
  grid.appendChild(col3);

  updatePagination(totalPages);
}

function updatePagination(totalPages) {
  const container = document.querySelector(".pagination");
  if (!container) return;

  container.innerHTML = "";

  function createBtn(label, page, active = false, disabled = false) {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.className = "page-num";
    if (active) btn.classList.add("active");
    if (!disabled) {
      btn.addEventListener("click", () => {
        currentPage = page;
        renderNews();
      });
    }
    return btn;
  }

  // Prev
  if (currentPage > 1) {
    container.appendChild(createBtn("← Prev", currentPage - 1));
  }

  const maxButtons = 5;
  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, start + maxButtons - 1);

  if (end - start < maxButtons - 1) {
    start = Math.max(1, end - maxButtons + 1);
  }

  if (start > 1) container.appendChild(createBtn("1", 1));
  if (start > 2) container.appendChild(createEllipsis());

  for (let i = start; i <= end; i++) {
    container.appendChild(createBtn(i, i, i === currentPage));
  }

  if (end < totalPages - 1) container.appendChild(createEllipsis());
  if (end < totalPages) container.appendChild(createBtn(totalPages, totalPages));

  // Next
  if (currentPage < totalPages) {
    container.appendChild(createBtn("Next →", currentPage + 1));
  }
}

function createEllipsis() {
  const span = document.createElement("button");
  span.textContent = "...";
  span.className = "page-num";
  span.style.pointerEvents = "none";
  return span;
}

function setupFilterButtons() {
  document.querySelectorAll(".news-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".news-filter-btn")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");
      const filterValue = btn.dataset.filter || btn.textContent.trim();
      currentFilter = filterValue;
      currentPage = 1;
      renderNews();
    });
  });
}

/* ============================
   PARALLAX HERO (INDEX)
   ============================ */

window.addEventListener("scroll", () => {
  const heroImg = document.querySelector(".hero-image");
  if (heroImg) {
    const scrollY = window.scrollY;
    heroImg.style.transform = `translateY(${scrollY * 0.2}px)`;
  }
});

/* ============================
   COUNTDOWN TIMER (INDEX)
   ============================ */

function updateCountdown() {
  const targetDateString = "2026-02-01T20:00:00";
  const matchDate = new Date(targetDateString).getTime();

  const now = new Date().getTime();
  const diff = matchDate - now;

  const timerElement = document.querySelector(".timer");
  const matchDetailsButton = document.querySelector(".next-match-inner .hero-btn");

  if (!timerElement || !matchDetailsButton) {
    return; // Exit if elements are missing
  }

  if (diff <= 0) {
    timerElement.innerHTML =
      `<div><span style="font-size: 2.5rem; font-weight: 700;">MATCH IS LIVE!</span></div>`;
    matchDetailsButton.textContent = "See Scoreboard";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const formatTime = time => (time < 10 ? `0${time}` : time);

  if (document.getElementById("days")) document.getElementById("days").textContent = days;
  if (document.getElementById("hours")) document.getElementById("hours").textContent = formatTime(hours);
  if (document.getElementById("minutes")) document.getElementById("minutes").textContent = formatTime(minutes);
  if (document.getElementById("seconds")) document.getElementById("seconds").textContent = formatTime(seconds);
}

setInterval(updateCountdown, 1000);
updateCountdown();

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("#edit-video-2 video");
  if (video) {
    video.addEventListener("click", () => video.play());
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Initial language
  setLanguage(getCurrentLanguage());

  // Flag buttons (if present)
  const spanishFlag = document.querySelector('.flags img[alt="Spanish"]');
  const englishFlag = document.querySelector('.flags img[alt="English"]');

  if (spanishFlag) {
    spanishFlag.addEventListener("click", () => {
      setLanguage("es");
      // Re-render news cards in ES if we're on the news page
      if (allNews.length && document.querySelector(".news-grid")) {
        renderNews();
      }
    });
  }

  if (englishFlag) {
    englishFlag.addEventListener("click", () => {
      setLanguage("en");
      if (allNews.length && document.querySelector(".news-grid")) {
        renderNews();
      }
    });
  }

  // Init news (only runs on pages with .news-grid)
  initNews();
});

function renderLatestNewsFullscreen() {
    const container = document.getElementById("latest-slider");
    if (!container) return;

    // Take 4 most recent news
    const latest = allNews.slice(0, 4).map(getDisplayArticleData);

    container.innerHTML = latest.map((a, i) => `
        <div class="latest-slide ${i === 0 ? "active" : ""}">
            <div class="latest-text">
                <h2>${a.title}</h2>
                <p>${a.fullText || a.text}</p>
            </div>
            <div class="latest-image">
                <img src="${a.img}" alt="${a.title}">
            </div>
        </div>
    `).join("");

    // Auto slider
    let index = 0;
    const slides = document.querySelectorAll(".latest-slide");

    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 5000);
}

function generateDust(){
    const dustContainer = document.getElementById("dust-container");
    for (let i = 0; i < 60; i++) {
        const d = document.createElement("div");
        d.classList.add("particle");
        d.style.left = Math.random()*100+"%";
        d.style.top = Math.random()*100+"%";
        d.style.animationDuration = 8 + Math.random()*12 + "s";
        dustContainer.appendChild(d);
    }
}

/* ⭐ SHOOTING STAR GENERATOR */
function generateShootingStars(){
    const container = document.getElementById("shooting-container");
    setInterval(() => {
        const s = document.createElement("div");
        s.className = "shooting-star";
        s.style.left = Math.random()*80+"vw";
        s.style.top = Math.random()*20+"vh";
        s.style.animationDuration = (1 + Math.random()*1.5) + "s";
        container.appendChild(s);
        setTimeout(() => s.remove(), 1800);
    }, 2800);
}

/* ✨ MOUSE PARALLAX */
document.addEventListener("mousemove", e => {
    const layer = document.getElementById("parallax-layer");
    const x = (window.innerWidth / 2 - e.clientX) * 0.02;
    const y = (window.innerHeight / 2 - e.clientY) * 0.02;
    layer.style.transform = `translate(${x}px, ${y}px)`;
});

/* INIT cosmic effects */
document.addEventListener("DOMContentLoaded", () => {
    generateDust();
    generateShootingStars();
});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".latest-slide");
    let i = 0;

    // show first slide
    slides.forEach(s => s.classList.remove("active"));
    slides[0].classList.add("active");

    setInterval(() => {
        slides[i].classList.remove("active");
        i = (i + 1) % slides.length;
        slides[i].classList.add("active");
    }, 6000);
});

function activateRotator(containerSelector, interval = 3000) {
    const containers = document.querySelectorAll(containerSelector);

    containers.forEach(container => {
        const imgs = container.querySelectorAll(".train-img");
        if (imgs.length === 0) return;

        let index = 0;

        // Reset
        imgs.forEach(img => img.classList.remove("active"));
        imgs[0].classList.add("active");

        setInterval(() => {
            imgs[index].classList.remove("active");
            index = (index + 1) % imgs.length;
            imgs[index].classList.add("active");
        }, interval);
    });
}

activateRotator(".training-big-slider");

document.addEventListener("click", function () {
    const vid = document.getElementById("trainingVideo");
    if (vid.muted) {
        vid.muted = false;
        vid.volume = 1.0;
    }
});

   const fadeElements = document.querySelectorAll('.fade-in');

    function checkScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 120) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);

const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 120) {
            el.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const statNumbers = document.querySelectorAll(".stat-number");
let statsAnimated = false;

function animateStats() {
  if (statsAnimated || statNumbers.length === 0) return;

  const section = document.querySelector("#all-time-stats");
  if (!section) return;

  const rect = section.getBoundingClientRect();
  const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;

  if (!inView) return;

  statsAnimated = true;

  statNumbers.forEach(el => {
    const target = parseInt(el.dataset.statTarget, 10);
    if (isNaN(target)) return;

    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value.toLocaleString("en-US");
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
}

window.addEventListener("scroll", animateStats);
window.addEventListener("load", animateStats);

const storyBlocks = document.querySelectorAll(".family-story-block");

const familyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.3 });

storyBlocks.forEach(block => familyObserver.observe(block));

window.addEventListener("scroll", () => {
  const section = document.querySelector(".family-section");
  const rect = section.getBoundingClientRect();
  const scrollPercent = Math.min(Math.max(rect.top / window.innerHeight, 0), 1);

  const beam1 = section.querySelector("::before");
  const beam2 = section.querySelector("::after");
});

window.addEventListener("scroll", () => {
  const section = document.querySelector(".family-section");
  const rect = section.getBoundingClientRect();
  
  const progress = -(rect.top - window.innerHeight / 2) * 0.02;

  const beam1 = document.querySelector(".beam-left");
  const beam2 = document.querySelector(".beam-right");

  beam1.style.transform = `translateY(${progress}px)`;
  beam2.style.transform = `translateY(${-progress}px)`;
});

const cards = document.querySelectorAll(".gavi-stats-card");
let currentIndex = 0;
let rotating = false;

function resetStats(card) {
    const nums = card.querySelectorAll(".stat-number");
    nums.forEach(n => n.textContent = "0");

    nums.forEach(el => {
        const target = parseInt(el.dataset.statTarget);
        if (!target) return;

        const duration = 1200;
        const start = performance.now();

        function animateNum(time) {
            const progress = Math.min((time - start) / duration, 1);
            const value = Math.floor(progress * target);
            el.textContent = value.toString();

            if (progress < 1) {
                requestAnimationFrame(animateNum);
            }
        }

        requestAnimationFrame(animateNum);
    });
}

function rotateCards() {
    if (rotating) return;
    rotating = true;

    const current = cards[currentIndex];
    const nextIndex = (currentIndex + 1) % cards.length;
    const next = cards[nextIndex];

    current.classList.remove("active");
    current.classList.add("exit");

    setTimeout(() => {
        current.classList.remove("exit");
        next.classList.add("active");

        resetStats(next);

        currentIndex = nextIndex;

        rotating = false;
    }, 1000); 
}

setInterval(rotateCards, 6000);
resetStats(cards[0]);

(function initPressBumper() {
  const track = document.getElementById("bumperTrack");
  if (!track) return;

  let anim;

  function px(n){ return Number.isFinite(n) ? n : 0; }

  function getTotalWidth() {
    const spans = Array.from(track.querySelectorAll(".bumper-text"));
    return spans.reduce((sum, el) => sum + el.getBoundingClientRect().width, 0);
  }

  function start() {
    if (anim) anim.cancel();

    const startX = window.innerWidth;    
    const totalWidth = getTotalWidth();  
    const buffer = 40;                    
    const endX = -(totalWidth + buffer); 

    const pxPerSec = 180;
    const distance = startX - endX;
    const duration = (distance / pxPerSec) * 1000;

    anim = track.animate(
      [
        { transform: `translateX(${startX}px)` },
        { transform: `translateX(${endX}px)` }
      ],
      {
        duration,
        iterations: Infinity,
        easing: "linear"
      }
    );
  }

  requestAnimationFrame(() => requestAnimationFrame(start));
  window.addEventListener("resize", start);
})();