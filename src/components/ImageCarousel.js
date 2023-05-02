export default function ImageCarousel(imageSrcs = [], rocketName = 'rocket') {
  const component = document.createElement('section');
  component.className = 'rocket__image-carousel';

  const carouselViewport = document.createElement('ol');
  carouselViewport.className = 'carousel__viewport';

  for (const [idx, imageSrc] of imageSrcs.entries()) {
    const carouselSlide = document.createElement('li');
    carouselSlide.id = `${rocketName.replace(' ', '')}-carousel__slide${
      idx + 1
    }`;
    carouselSlide.className = 'carousel__slide';

    const imgElement = document.createElement('img');
    imgElement.className = 'carousel__image';
    imgElement.src = imageSrc;
    imgElement.alt = rocketName;

    const link = document.createElement('a');
    link.href = `#${rocketName.replace(' ', '')}-carousel__slide${
      imageSrcs.length - 1
    }`;
    link.className = carouselSlide.appendChild(imgElement);
    carouselSlide.appendChild(link);

    carouselViewport.appendChild(carouselSlide);
  }

  component.appendChild(carouselViewport);

  const carouselNavigation = document.createElement('aside');
  carouselNavigation.className = 'carousel__navigation';

  const navigationList = document.createElement('ol');
  navigationList.className = 'carousel__navigation-list';

  for (let i = 1; i <= imageSrcs.length; i++) {
    const li = document.createElement('li');
    li.className = 'carousel__navigation-item';

    // const carouselSnapper = document.createElement('div');
    // carouselSnapper.className = 'carousel__snapper';

    // li.appendChild(carouselSnapper);

    const link = document.createElement('a');
    link.href = `#${rocketName.replace(' ', '')}-carousel__slide${i}`;
    // link.href = `#carousel__slide${i}`;
    link.className = 'carousel__navigation-button';
    link.innerText = `Go to slide ${i}`;

    li.appendChild(link);

    navigationList.appendChild(li);
  }

  carouselNavigation.appendChild(navigationList);
  component.appendChild(carouselNavigation);

  return component;
}
