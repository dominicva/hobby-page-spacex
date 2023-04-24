import { getFromLocalStorage, storeInLocalStorage } from './localStorage';
import fetchRocketsData from './fetchRocketsData';

export default async function loadData() {
  let data = getFromLocalStorage('data');

  if (!data) {
    data = await fetchRocketsData();
    storeInLocalStorage('data', data);
  }

  return data;
}
