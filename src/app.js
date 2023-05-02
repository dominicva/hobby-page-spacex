import Rocket from './components/Rocket';
import Starscape from './components/Starscape';
import loadData from './lib/loadData';

function renderCarousel() {
  const rockets = document.querySelectorAll('.rocket');

  for (const rocket of rockets) {
    const slides = rocket.querySelectorAll('.rocket__image-slide');
    let currSlide = 0;
    const maxSlide = slides.length - 1;
    const nextSlide = rocket.querySelector('.btn-next');
    nextSlide.addEventListener('click', () => {
      if (currSlide !== maxSlide) {
        currSlide += 1;
      }

      slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${100 * (idx - currSlide)}%)`;
      });
    });

    const prevSlide = rocket.querySelector('.btn-prev');
    prevSlide.addEventListener('click', () => {
      if (currSlide !== 0) {
        currSlide -= 1;
      }

      slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${100 * (idx - currSlide)}%)`;
      });
    });
  }
}

function slideCounter(rocket) {}

async function render() {
  // interactive starry background
  document.body.prepend(Starscape());

  try {
    const rockets = await loadData();

    const rocketsSectionElement = document.querySelector('.rockets__section');

    for (const rocket of rockets) {
      rocketsSectionElement.append(Rocket(rocket));
    }
    renderCarousel();
  } catch (e) {
    console.error(`❌ RENDER ERROR\n${e}`);
  }
}

window.addEventListener('DOMContentLoaded', render);
