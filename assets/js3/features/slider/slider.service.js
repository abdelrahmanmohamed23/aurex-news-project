
export function getSliderNews (news) {

return news.filter((element)=> {
return element.display_section === "hero"
})
}