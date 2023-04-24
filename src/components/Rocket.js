export default function Rocket(props) {
  const htmlElement = document.createElement('div');
  const innerHtml = `<h2>${props.name}</h2>`;
  htmlElement.innerHTML = innerHtml;
  return htmlElement;
}
