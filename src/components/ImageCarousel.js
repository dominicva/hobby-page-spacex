export default function ImageCarousel(imageSrcs = [], rocketName = 'rocket') {
  const component = document.createElement('div');
  component.className = 'rocket__image-slider';

  let innerHtml =
    imageSrcs.reduce((output, imageSrc, idx) => {
      const slide = ImageSlide(imageSrc, rocketName);
      return output.concat(slide);
    }, '') +
    `
  <button class="btn btn-next"></button>
  <button class="btn btn-prev"></button>
  `;

  component.innerHTML = innerHtml;

  let currSlide = 0;
  const maxSlide = imageSrcs.length - 1;
  let nextSlide = null;

  const slides = component.querySelectorAll('.rocket__image-slide');
  const slideLabel = document.createElement('p');
  slideLabel.style = `position: absolute; bottom: 0%; left: 0; z-index: 100;`;
  //   const slideLabel = `<p></p>`;
  component.appendChild(slideLabel);
  //   slides.innerHTML += `<p>Image ${currSlide} of ${imageSrcs.length}</p>`;
  nextSlide = component.querySelector('.btn-next');

  //   console.log(nextSlide);
  nextSlide.addEventListener('click', () => {
    if (currSlide !== maxSlide) {
      currSlide += 1;
    }

    slides.forEach((slide, idx) => {
      slide.style.transform = `translateX(${100 * (idx - currSlide)}%)`;
    });

    slideLabel.innerHTML = `Image ${currSlide} of ${imageSrcs.length}`;
  });

  const prevSlide = component.querySelector('.btn-prev');
  prevSlide.addEventListener('click', () => {
    if (currSlide !== 0) {
      currSlide -= 1;
    }

    slides.forEach((slide, idx) => {
      slide.style.transform = `translateX(${100 * (idx - currSlide)}%)`;
    });

    slideLabel.innerHTML = `Image ${currSlide + 1} of ${imageSrcs.length}`;
  });

  return component;
}

function ImageSlide(imageSrc, altText) {
  return `
      <div class="rocket__image-slide">
        <img class="rocket__image" src="${imageSrc}" alt="${altText}" />
      </div>
    `;
}
