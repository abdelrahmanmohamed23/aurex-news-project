 
 import { getDataBySection, addArticlesCards ,newsClickHandle } from "../../utils/helpers.js";
import {handleShowArticlesClick} from "../../utils/helpers.js"
const latestSection = document.getElementById("latest")
 
 export function initLatest(data,initArticle) {
    const latestData =  getDataBySection(data, "latest")

   
addArticlesCards(latestData,latestSection,"latest")
newsClickHandle(data,latestSection,initArticle)
 }