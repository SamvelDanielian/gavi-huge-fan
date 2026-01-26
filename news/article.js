const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

function getCurrentLanguage() {
    return localStorage.getItem("language") || "en";
}

const articleTranslations = {
    en: {
        back_to_news: "← Back to News",
        breadcrumb_home: "Home",
        breadcrumb_news: "News",
        related_articles_title: "Related Articles",
        comments_title: "Comments",
        no_comments: "No comments yet.",
        comment_placeholder: "Write a comment...",
        post_comment: "Post Comment",
        share_article: "Share this article"
    },
    es: {
        back_to_news: "← Volver a Noticias",
        breadcrumb_home: "Inicio",
        breadcrumb_news: "Noticias",
        related_articles_title: "Artículos Relacionados",
        comments_title: "Comentarios",
        no_comments: "Aún no hay comentarios.",
        comment_placeholder: "Escribe un comentario...",
        post_comment: "Publicar Comentario",
        share_article: "Compartir este Artículo"
    }
};

function t(key) {
    const lang = getCurrentLanguage();
    return articleTranslations[lang][key] || key;
}

function applyArticleUITranslations(articleTitle) {
    const lang = getCurrentLanguage();

    const backBtn = document.getElementById("back-to-news");
    if (backBtn) backBtn.textContent = t("back_to_news");

    const bcHome = document.getElementById("breadcrumb-home");
    if (bcHome) bcHome.textContent = t("breadcrumb_home");

    const bcNews = document.getElementById("breadcrumb-news");
    if (bcNews) bcNews.textContent = t("breadcrumb_news");

    const bcTitle = document.getElementById("breadcrumb-title");
    if (bcTitle) bcTitle.textContent = articleTitle;

    const relatedTitle = document.getElementById("related-title");
    if (relatedTitle) relatedTitle.textContent = t("related_articles_title");

    const commentsTitle = document.getElementById("comments-title");
    if (commentsTitle) commentsTitle.textContent = t("comments_title");

    const input = document.getElementById("comment-input");
    if (input) input.placeholder = t("comment_placeholder");

    const postBtn = document.getElementById("comment-post");
    if (postBtn) postBtn.textContent = t("post_comment");

    const share = document.getElementById("share-title");
    if (share) share.textContent = t("share_article");
}

function renderArticle(allNews, article) {

    applyArticleUITranslations(article.title);

    const img = document.getElementById("article-image");
    if (img) {
        img.src = "../" + article.img;
        img.alt = article.title;
    }

    const title = document.getElementById("article-title");
    if (title) title.textContent = article.title;

    const textBlock = document.getElementById("article-fulltext");
    if (textBlock) {
        const content = article.fullText || article.text || "";
        textBlock.innerHTML = content.replace(/\n/g, "<br><br>");
    }

    const tagBox = document.getElementById("article-tags");
    if (tagBox && article.tags) {
        tagBox.innerHTML = article.tags
            .map(t => `<span class="article-tag">${t}</span>`)
            .join("");
    }

    const viewKey = "views_" + slug;
    let views = parseInt(localStorage.getItem(viewKey) || "0");
    if (isNaN(views)) views = 0;
    views++;
    localStorage.setItem(viewKey, views);
    const viewEl = document.getElementById("view-count");
    if (viewEl) viewEl.textContent = views;

    const likeKey = "likes_" + slug;
    let likes = parseInt(localStorage.getItem(likeKey) || "0");
    if (isNaN(likes)) likes = 0;

    const likeCount = document.getElementById("like-count");
    const likeBtn = document.getElementById("like-button");
    if (likeCount) likeCount.textContent = likes;

    if (likeBtn) {
        likeBtn.addEventListener("click", () => {
            likes++;
            localStorage.setItem(likeKey, likes);
            likeCount.textContent = likes;
        });
    }

    const relatedBox = document.getElementById("related-articles");

    if (relatedBox) {
        const lang = getCurrentLanguage();

        const displayCategory = article.category;

        const related = allNews
            .filter(a => {
                if (a.slug === slug) return false;

                const d = getDisplayArticleData(a);
                return d.category === displayCategory;
            })
            .slice(0, 3);

        if (!related.length) {
            relatedBox.innerHTML = `<p>${t("no_comments")}</p>`;
        } else {
            relatedBox.innerHTML = related
                .map(a => {
                    const d = getDisplayArticleData(a);
                    return `
                        <a href="index.html?slug=${a.slug}" class="related-card">
                            <img src="../${a.img}" alt="${d.title}">
                            <div class="related-card-title">${d.title}</div>
                        </a>
                    `;
                })
                .join("");
        }
    }

    const comKey = "comments_" + slug;
    let comments = JSON.parse(localStorage.getItem(comKey) || "[]");

    const comBox = document.getElementById("comments-container");
    const comInput = document.getElementById("comment-input");
    const comBtn = document.getElementById("comment-post");

    function showComments() {
        if (!comments.length) {
            comBox.innerHTML = `<p>${t("no_comments")}</p>`;
        } else {
            comBox.innerHTML = comments.map(c => `<div class="comment-item">${c}</div>`).join("");
        }
    }

    showComments();

    const url = window.location.href;

    const fb = document.getElementById("share-facebook");
    const tw = document.getElementById("share-twitter");
    const wa = document.getElementById("share-whatsapp");

    if (fb) {
        fb.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    }

    if (tw) {
        tw.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article.title)}`;
    }

    if (wa) {
        wa.href = `https://wa.me/?text=${encodeURIComponent(article.title + " " + url)}`;
    }

    if (comBtn && comInput) {
        comBtn.onclick = () => {
            const val = comInput.value.trim();
            if (!val) return;
            comments.push(val);
            localStorage.setItem(comKey, JSON.stringify(comments));
            comInput.value = "";
            showComments();
        };
    }
}

if (!slug) {
    document.body.innerHTML = "<h1>Article not found</h1>";
} else {
    fetch("../data/news.json")
        .then(res => res.json())
        .then(async allNews => {
            const base = allNews.find(a => a.slug === slug);

            if (!base) {
                document.body.innerHTML = "<h1>Article not found</h1>";
                return;
            }

            const lang = getCurrentLanguage();

            if (lang === "es") {
                const trs = await fetch("../data/news_translations.json").then(r => r.json());
                window.allTranslations = trs;
                const t = trs[slug];

                if (t) {
                    const translated = {
                        ...base,
                        title: t.title_es || base.title,
                        text: t.text_es || base.text,
                        fullText: t.fullText_es || base.fullText,
                        category: t.category_es || base.category,
                        tags: t.tags_es || base.tags
                    };
                    renderArticle(allNews, translated);
                    return;
                }
            }

            renderArticle(allNews, base);
        })
        .catch(() => {
            document.body.innerHTML = "<h1>Error loading article</h1>";
        });
}

function getDisplayArticleData(article) {
    const lang = getCurrentLanguage();

    if (lang !== "es") return article;

    if (window.allTranslations && window.allTranslations[article.slug]) {
        const t = window.allTranslations[article.slug];
        return {
            ...article,
            title: t.title_es || article.title,
            category: t.category_es || article.category,
            tags: t.tags_es || article.tags
        };
    }

    return article;
}
