export function storeInLocalStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key) {
  return JSON.parse(window.localStorage.getItem(key));
}
