const slider = document.getElementById("slider");

function createSlide(news) {
  return `
  <a class="hero__link u-size-full u-none " data-news-id="${news.id}">
            <img onload="this.parentElement.classList.remove('u-none')" class="hero__img u-size-full u-object-cover u-opacity-0" src="${news.image.sizes.large}" alt="${news.image.alt}" />
            <div class="flex hero__content">
              <p class="hero__category">${news.category}</p>
              <h2 style="text-shadow: ${news.image.text_shadow};" class="u-line-clamp hero__title">${news.title}</h2>
              <p style="text-shadow: ${news.image.text_shadow};" class="hero__description">${news.date}</p>
            </div>
            </a>
          `;
}
function addSlides(sliderNews) {

  sliderNews.forEach((element) => {
    slider.insertAdjacentHTML("beforeend", createSlide(element));
  });
}

export function sliderRender(state) {

  if (!state.slider.animation.animationStarted && slider.children.length === 0) {
    addSlides(state.slider.sliderNews)
    sliderPreparation();
  } else if (state.slider.animation.animationStarted){
moveSlides(state)

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


