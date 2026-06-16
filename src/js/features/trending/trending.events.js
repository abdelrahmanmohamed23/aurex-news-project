import { requestArticleDisplay } from "../../utils/helpers.js";
const trendingSection = document.getElementById("trending");

export function trendingEvents() {
  [...trendingSection.children].forEach((element) => {
    if (element.tagName === "A") {
      element.addEventListener("click", (event) => {
        event.preventDefault()
        requestArticleDisplay(Number(element.getAttribute("data-news-id")));
      });
    }
  });
}
