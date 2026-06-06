
import { changeWindowSize } from "./logic.js";
import { changingWindowSizeHandle, render } from "./render.js";
export function initMenu () {
   
    changeWindowSize()
    changingWindowSizeHandle()
    render()
}