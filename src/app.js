function Rocket(props) {
  const htmlElement = document.createElement('div');
  const innerHtml = `<h2>${props.name}</h2>`;
  htmlElement.innerHTML = innerHtml;
  return htmlElement;
}

async function fetchRocketsData() {
  const API_URL = 'https://api.spacexdata.com/v4/rockets';

  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data.map(
      ({
        name,
        active,
        description,
        cost_per_launch: costPerLaunch,
        first_flight: firstFlight,
        success_rate_pct: successRatePct,
        country,
        mass,
        height,
        diameter,
        engines,
        flickr_images: images,
        wikipedia,
      }) => ({
        name,
        active,
        description,
        costPerLaunch,
        firstFlight,
        successRatePct,
        country,
        mass,
        height,
        diameter,
        engines: {
          number: engines.number,
          type: engines.type,
        },
        images,
        wikipedia,
      })
    );
  } catch (e) {
    console.error(`❌ DATA FETCHING ERROR\n${e}`);
  }
}

function storeInLocalStorage(data) {
  window.localStorage.setItem('data', JSON.stringify(data));
}

function getFromLocalStorage(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

async function loadData() {
  let data = getFromLocalStorage('data');

  if (!data) {
    data = await fetchRocketsData();
    storeInLocalStorage(data);
  }

  return data;
}

async function render() {
  try {
    const rockets = await loadData();

    for (const rocket of rockets) {
      document.querySelector('.rockets__section').append(Rocket(rocket));
    }
  } catch (e) {
    console.error(`❌ RENDER ERROR\n${e}`);
  }
}

window.addEventListener('DOMContentLoaded', render);
