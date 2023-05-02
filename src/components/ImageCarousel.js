export default function ImageCarousel(imageSrcs = [], rocketName = 'rocket') {
  console.log(imageSrcs);

  const component = document.createElement('div');

  // let innerHtml = '';

  for (const [idx, imageSrc] of imageSrcs.entries()) {
    const figureElement = document.createElement('figure');
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.alt = rocketName;
    const figcaptionElement = document.createElement('figcaption');
    figcaptionElement.innerText = `Image ${idx + 1} of ${imageSrcs.length}`;

    figureElement.appendChild(imgElement);
    figureElement.appendChild(figcaptionElement);

    component.appendChild(figureElement);
  }

  return component;
}
