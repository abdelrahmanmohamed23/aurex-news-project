
import { themeRender } from "../features/theme/theme.render.js";
import {sliderRender} from "../features/slider/slider.render.js"
export function render (state) {
    const lastUpdatedKey = state.lastUpdatedKey

    switch (lastUpdatedKey) {
        case "theme": 
themeRender(state)

        break;
        case "slider": 
 sliderRender(state)
        break;
    }

}
