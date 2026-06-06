
import {addCards} from "./render.js"

export async function handleLatestNews (data) {
const news = await data;
addCards(news.news)


}