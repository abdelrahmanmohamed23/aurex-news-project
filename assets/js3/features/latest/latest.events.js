import {requestArticleDisplay} from "../../utils/helpers.js"
const latestSection = document.getElementById("latest")
export function latestEvents () {
[...latestSection.children].forEach((element) => {

element.addEventListener("click", () => {
 requestArticleDisplay(Number(element.getAttribute("data-news-id")));
})


  });
}
