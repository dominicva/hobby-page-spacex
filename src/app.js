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
      rocketsSectionElement.append(Rocket(rocket));
    }
  } catch (e) {
    console.error(`❌ RENDER ERROR\n${e}`);
  }
}

window.addEventListener('DOMContentLoaded', render);
