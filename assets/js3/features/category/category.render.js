
import { addArticlesCards } from "../../utils/helpers.js";


export function categoryRender (state) {
   
  createCategoryContainer(state.category)
categoryDisplay(state)
 const categoryArticlesCardes = Array.from(document.getElementById("category").children).slice(1)
      
 requestAddingClick(categoryArticlesCardes)
    
}

function categoryDisplay (state) {
   
const news = [
    ...state.slider.sliderNews,
    ...state.trending.trendingNews,
    ...state.latest.latestNews,
  ].filter((element) => {
    return element.category === state.category
  })
    addArticlesCards(news, "category", document.getElementById("category"))

//    allNews.forEach((element)=> {
//     if (element.category !== state.category) return

//     //  document
//     //       .getElementById("category")
//     //       .insertAdjacentHTML("beforeend", createArticleCard(element));
//     addArticlesCards(element, "category", document.getElementById("category"))
//   })

}

function createCategoryContainer(category) {
     const hero = document.querySelector(".hero");
  const latest = document.getElementById("latest");
const categoryContainer = document.getElementById("category")
  const article = document.querySelector(".article");
  hero.classList.add("u-none");
  latest.classList.add("u-none");
  if (article) article.remove();
  if (categoryContainer) categoryContainer.remove()
    document.querySelector("main").insertAdjacentHTML("afterbegin", `
<section id="category" class="category u-flex"> 
<h2 class="category__title">${category}</h2>
</section>
`);
  setTimeout( () => {
    window.scrollTo(0, 0)
 }, 0)
}

function requestAddingClick (news)
{
    const requestAddingClick = new CustomEvent("requestAddingClick",  {
detail: {
news
}
    })
    window.dispatchEvent(requestAddingClick)
}