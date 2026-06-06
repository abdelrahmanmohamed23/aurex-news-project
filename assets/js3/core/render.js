
import { themeRender } from "../features/theme/theme.render.js";
export function render (state) {
    if (state.lastUpdatedKey === "theme") {
themeRender(state)
    }
}
