
import { dispatch } from "../../core/state.js";
import {dropdownEvents} from "./dropdown.events.js"
const DROPDOWN_BREAKPOINT = 880;
export function initDropdown () {
dispatch(handleNavResponsiveness)
dropdownEvents()

}

export function handleNavResponsiveness (state) {
  
    if (window.innerWidth  <= DROPDOWN_BREAKPOINT ) {
        return {
            ...state, 
            dropdown: {
                ...state.dropdown, 
                appearance: false
            }, lastUpdatedKey: "dropdown"
        }
    }
     return {
        ...state, 
        dropdown: {
            ...state.dropdown, 
            appearance: null
        },lastUpdatedKey: "dropdown"
     }

}
export function dropdownToggle (state) {
if (state.dropdown.appearance){
    return {
        ...state, 
        dropdown: {
            ...state.dropdown, 
            appearance: false
        },lastUpdatedKey: "dropdown"
     }

} else {
     return {
        ...state, 
        dropdown: {
            ...state.dropdown, 
            appearance: true
        },lastUpdatedKey: "dropdown"
     }
}
}
