
const parentElement = document.querySelector(".latest")
function createArticleCard (news) {
    return `
             <a class="article-card u-flex u-none">
          <img
          onload="this.parentElement.classList.remove('u-none')"
            class="u-object-cover article-card__img article-card__img--latest"
            src="${news.imageUrl}"
            alt=""
          />
          <div class="u-line-bottom article-card__content">
            <h3 class="u-line-clamp article-card__title">${news.title}</h3>
            <p class="article-card__description"><span>${news.date}</span> | <span>${news.category}</span></p>
          </div>
        </a>

    `
}

export function addCards (news) {
      const newsKeys = Object.keys(news);
    for (let i = 0; i < news.length ; i++) {
       
        parentElement.innerHTML +=  createArticleCard(news[newsKeys[i]]);

    }
    
}