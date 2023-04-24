const API_URL = 'https://api.spacexdata.com/v4/rockets';

async function getRocketsData(url) {
  try {
    const res = await fetch(url);
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
    console.error(`❌ ERROR\nUnable to get rocket data\n${e}`);
  }
}

function storeInLocalStorage(data) {
  window.localStorage.setItem('data', JSON.stringify(data));
}

async function loadData() {
  const existingData = window.localStorage.getItem('data');

  if (!existingData) {
    const rocketsData = await getRocketsData(API_URL);
    storeInLocalStorage(rocketsData);
  }
}

loadData();
