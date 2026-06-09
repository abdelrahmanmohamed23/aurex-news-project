const main = document.querySelector("main");
const hero = document.querySelector(".hero");
const trending = document.querySelector(".trending");
const latest = document.getElementById("latest");
export function articleRender(state) {
  const allNews = [
    ...state.slider.sliderNews,
    ...state.trending.trendingNews,
    ...state.latest.latestNews,
  ];

  const news = allNews.find((element) => {
    return element.id === state.article.newsId;
  });


 
  displayArticle(news);
}

function createArticle(news) {
  return `
        <article class="u-flex article" >
    <h1 class="article__title">${news.title}</h1>
    <p class="article__description" >${news.category} | ${news.date}</p>
    <img class="u-object-cover article__img" src="${news.image.sizes.large}">
    <p class="article__content">${news.article}</p>
    </article>  
    
    `;
}

function displayArticle(news) {

      const article = document.querySelector(".article");
      if (article) article.remove();
  hero.classList.add("u-none");
  latest.classList.add("u-none");
  trending.classList.add("trending--article");
  trending.classList.remove("trending--category");
  main.insertAdjacentHTML("afterbegin", createArticle(news));

 setTimeout( () => {
    window.scrollTo(0, 0)
 }, 0)
}


