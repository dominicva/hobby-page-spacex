import Rocket from './components/Rocket';
import loadData from './lib/loadData';

async function render() {
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
