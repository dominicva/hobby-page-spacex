export default function ImageCarousel(imageSrcs = [], rocketName = 'rocket') {
  let currentImageIdx = 0;

  const component = document.createElement('section');
  component.className = 'rocket__image-carousel';

  const carouselViewport = document.createElement('ol');
  carouselViewport.className = 'carousel__viewport';

  for (const [idx, imageSrc] of imageSrcs.entries()) {
    const carouselSlide = document.createElement('li');
    carouselSlide.id = `${rocketName.replace(' ', '')}-carousel__slide${idx}`;
    carouselSlide.className = 'carousel__slide';

    const imgElement = document.createElement('img');
    imgElement.className = 'carousel__image';
    imgElement.src = imageSrc;
    imgElement.alt = rocketName;

    carouselSlide.appendChild(imgElement);

    carouselViewport.appendChild(carouselSlide);
  }

  component.appendChild(carouselViewport);

  const carouselNavigation = document.createElement('aside');
  carouselNavigation.className = 'carousel__navigation';

  const navigationList = document.createElement('ol');
  navigationList.className = 'carousel__navigation-list';

  for (let i = 0; i < imageSrcs.length; i++) {
    const li = document.createElement('li');
    li.className = 'carousel__navigation-item';

    const link = document.createElement('a');
    link.href = `#${rocketName.replace(' ', '')}-carousel__slide${i}`;
    link.className = 'carousel__navigation-button';
    link.innerText = `Go to slide ${i + 1}`;

    link.addEventListener('click', () => {
      currentImageIdx = i;
      const links = navigationList.querySelectorAll(
        '.carousel__navigation-button'
      );
      for (const [idx, link] of links.entries()) {
        if (idx === currentImageIdx) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });

    li.appendChild(link);

    navigationList.appendChild(li);
  }

  carouselNavigation.appendChild(navigationList);
  component.appendChild(carouselNavigation);

  return component;
}
