const slider = document.getElementById("slider");

function createSlide(news, newsIndex) {
  return `
  <a href="/article/news-id-${news.id}" class="hero__link u-size-full u-opacity-0 " data-news-id="${news.id}">
         <img crossorigin="anonymous" sizes="(max-width: 1350px) 100vw, 80vw" ${newsIndex === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} onload="this.parentElement.classList.remove('u-opacity-0')" class="hero__img u-size-full u-object-cover " src="${news.image.sizes.small}" srcset="${news.image.sizes.large} 1200w, ${news.image.sizes.medium} 768w, ${news.image.sizes.small} 480w" alt="${news.image.alt}" />
       
            <div class="flex hero__content">
              <p class="hero__category">${news.category[0].toUpperCase() + news.category.slice(1)}</p>
              <h2 style="text-shadow: ${news.image.text_shadow};" class="u-line-clamp hero__title">${news.title}</h2>
              <p style="text-shadow: ${news.image.text_shadow};" class="hero__description">${news.date}</p>
            </div>
            </a>
          `;
}
function addSlides(sliderNews) {
  sliderNews.forEach((element, index) => {
    
    slider.insertAdjacentHTML("beforeend", createSlide(element, index));
  });
}

export function sliderRender(state) {
  if (
    !state.slider.animation.animationStarted &&
    slider.children.length === 0
  ) {
    addSlides(state.slider.sliderNews);
    sliderPreparation();
  } else if (state.slider.animation.animationStarted) {
    moveSlides(state);
  }
}

function sliderPreparation() {
  [...slider.children].forEach((element, index) => {
    if (index !== 0) {
      resetSlidePosition(element);
    }
  });
}

function moveSlides(state) {
  moveSlideToEndPosition(
    slider.querySelector(
      `:scope > :nth-child(${state.slider.animation.activeElementNumber})`,
    ),
  );
  activateSlide(
    slider.querySelector(
      `:scope > :nth-child(${state.slider.animation.nextElementNumber})`,
    ),
  );
  if (state.slider.animation.perviousElementNumber) {
    resetSlidePosition(
      slider.querySelector(
        `:scope > :nth-child(${state.slider.animation.perviousElementNumber})`,
      ),
    );
  }
}

function resetSlidePosition(element) {
  element.style.opacity = 0;
  element.style.transform = "translateX(-100%)";

  
}
function moveSlideToEndPosition(element) {
  element.style.opacity = 1;
  element.style.transform = "translateX(100%)";
  
}
function activateSlide(element) {
  element.style.opacity = 1;
  element.style.transform = "translateX(0)";
}
