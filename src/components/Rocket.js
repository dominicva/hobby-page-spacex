import ImageCarousel from './ImageCarousel';
import RocketData from './RocketData';

export default function Rocket(props) {
  const component = document.createElement('div');
  component.className = 'rocket';

  const children = [ImageCarousel(props.images, props.name), RocketData(props)];

  for (const child of children) {
    console.log(child);
    component.append(child);
  }

  return component;
}
