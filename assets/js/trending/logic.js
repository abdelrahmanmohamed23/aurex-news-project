import {addCards} from "./render.js"

export async function handleTrendingNews (data) {
const news = await data;
addCards(news.trending)


}