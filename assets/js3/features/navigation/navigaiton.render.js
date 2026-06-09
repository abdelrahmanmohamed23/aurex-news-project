const navList = document.querySelector("nav ul");
export function navigationRender(state) {
  if (!state.navigation.linksRendered) {
    addLinksToNav(state.navigation.categories);
  
  }

  
  if (state.navigation.activePageType === "home") {
    displayHome();
  }
}

function addLinksToNav(categories) {
  categories.forEach((element) => {
    navList.insertAdjacentHTML("beforeend", createLink(element));
  });
}

function createLink(category) {
  return `
 <li><a data-link-name="${category}" class="header__nav-link">${category}</a></li>

`;
}

function displayHome() {
  const hero = document.querySelector(".hero");
  const latest = document.getElementById("latest");
  const article = document.querySelector(".article");
  const category = document.getElementById("category");

   
  hero.classList.remove("u-none");
  latest.classList.remove("u-none");
   if (article) article.remove();
  if (category) category.remove();
  setTimeout( () => {
    window.scrollTo(0, 0)
 }, 0)
}


export function handleActiveNavLink (state) {
  
    const activeLinkName = state.activeLinkName
    const activeLink = document.querySelector(".header__nav-link--active")
  
if (activeLinkName === null) {
  if (activeLink){ activeLink.classList.remove("header__nav-link--active")}
}else if (activeLinkName === "home") {
  navList.querySelector("[data-link-name='home']").classList.add("header__nav-link--active")
}
}
