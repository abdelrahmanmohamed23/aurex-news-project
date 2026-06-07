
import { dispatch } from "../../core/state.js";
import {dropmenuEvents} from "./dropmenu.events.js"
const DROPMENU_BREAKPOINT = 780;
export function initDropmenu () {
dispatch(handleNavResponsiveness)
dropmenuEvents()

}

export function handleNavResponsiveness (state) {
  
    if (window.innerWidth  <= 780 ) {
        return {
            ...state, 
            dropmenu: {
                ...state.dropmenu, 
                dropmenuAppearance: false
            }, lastUpdatedKey: "dropmenu"
        }
    }
     return {
        ...state, 
        dropmenu: {
            ...state.dropmenu, 
            dropmenuAppearance: null
        },lastUpdatedKey: "dropmenu"
     }

}
export function dropmenuToggle (state) {
if (state.dropmenu.dropmenuAppearance){
    return {
        ...state, 
        dropmenu: {
            ...state.dropmenu, 
            dropmenuAppearance: false
        },lastUpdatedKey: "dropmenu"
     }

} else {
     return {
        ...state, 
        dropmenu: {
            ...state.dropmenu, 
            dropmenuAppearance: true
        },lastUpdatedKey: "dropmenu"
     }
}
}
