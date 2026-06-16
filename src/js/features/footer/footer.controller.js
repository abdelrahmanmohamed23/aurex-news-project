import { dispatch } from "../../core/state.js";
export function initFooter () {
dispatch(getYear())
}
function getYear () {
    const date = new Date;
    const year = date.getFullYear();
    return function (state) {
        return {
            ...state,
            footerYear: year,     lastUpdatedKey:"footer"

        }
    }
}