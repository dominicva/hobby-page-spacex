export default async function fetchRocketsData() {
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
