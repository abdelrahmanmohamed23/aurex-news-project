import { setAttr, removeAttr } from "../shared/utils/attributes.js";
import { qs, root } from "../shared/utils/dom.js";

export function changeTheme() {
  const isLight = !root.hasAttribute("data-theme");
  const icon = qs("#themeChangerBtn img");
  if (isLight) {
    setAttr(root, "data-theme", "dark");
    changeIcon(icon, "./assets/icons/sun.png", "Sun");
  } else {
    removeAttr(root, "data-theme");
    changeIcon(icon, "./assets/icons/moon-solid.png", "Crescent Moon");
  }
}
function changeIcon(element, url, alt) {
  setAttr(element, "src", url);
  setAttr(element, "alt", alt);
}
