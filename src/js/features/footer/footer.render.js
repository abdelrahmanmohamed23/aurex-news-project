
const footerCopyrightYear = document.getElementById("footer-copyright-year")
export function footerRender (state) { 
footerCopyrightYear.textContent  = state.footerYear
}