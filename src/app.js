import Rocket from './components/Rocket';
import Starscape from './components/Starscape';
import loadData from './lib/loadData';

async function render() {
  // interactive starry background
  document.body.prepend(Starscape());

  try {
    const rockets = await loadData();

    const rocketsSectionElement = document.querySelector('.rockets__section');

    for (const rocket of rockets) {
      const component = Rocket(rocket);
      rocketsSectionElement.append(component);
    }

    // bit hacky
    const carouselNavigationLists = document.querySelectorAll(
      '.carousel__navigation-list'
    );
    for (const list of carouselNavigationLists) {
      const links = list.querySelectorAll('a');
      links[0].classList.add('active');
    }
  } catch (e) {
    console.error(`❌ RENDER ERROR\n${e}`);
  }
}

window.addEventListener('DOMContentLoaded', render);
