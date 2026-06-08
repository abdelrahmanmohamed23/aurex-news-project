
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
                appearance: false
            }, lastUpdatedKey: "dropmenu"
        }
    }
     return {
        ...state, 
        dropmenu: {
            ...state.dropmenu, 
            appearance: null
        },lastUpdatedKey: "dropmenu"
     }

}
export function dropmenuToggle (state) {
if (state.dropmenu.appearance){
    return {
        ...state, 
        dropmenu: {
            ...state.dropmenu, 
            appearance: false
        },lastUpdatedKey: "dropmenu"
     }

} else {
     return {
        ...state, 
        dropmenu: {
            ...state.dropmenu, 
            appearance: true
        },lastUpdatedKey: "dropmenu"
     }
}
}
