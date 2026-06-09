import { requestArticleDisplay } from "../../utils/helpers.js";
const trendingSection = document.getElementById("trending");

export function trendingEvents() {
  [...trendingSection.children].forEach((element) => {
    element.addEventListener("click", () => {
      requestArticleDisplay(Number(element.getAttribute("data-news-id")));
    });
  });
}
