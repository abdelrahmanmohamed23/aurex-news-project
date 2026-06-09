
import { addArticlesCards,setupPage,scrollToTop } from "../../utils/helpers.js";


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
  setupPage("category")

    document.querySelector("main").insertAdjacentHTML("afterbegin", `
<section id="category" class="category u-flex"> 
<h2 class="category__title">${category}</h2>
</section>
`);
scrollToTop()
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