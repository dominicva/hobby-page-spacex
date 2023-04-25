import gsap from 'gsap';

// Inspired by: https://css-tricks.com/an-interactive-starry-backdrop-for-content/
export default function Starscape({
  densityRatio = 0.5,
  sizeLimit = 5,
  defaultAlpha = 0.5,
  scaleLimit = 2,
  proximityRatio = 0.1,
} = {}) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  let stars = null;
  let vmin = null;
  let scaleMapper = null;
  let alphaMapper = null;

  function load() {
    vmin = Math.min(window.innerHeight, window.innerWidth);
    const STAR_COUNT = Math.floor(vmin * densityRatio);

    scaleMapper = gsap.utils.mapRange(0, vmin * proximityRatio, scaleLimit, 1);
    alphaMapper = gsap.utils.mapRange(
      0,
      vmin * proximityRatio,
      1,
      defaultAlpha
    );

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    stars = new Array(STAR_COUNT).fill().map(() => ({
      x: gsap.utils.random(0, window.innerWidth, 1),
      y: gsap.utils.random(0, window.innerHeight, 1),
      size: gsap.utils.random(1, sizeLimit, 1),
      scale: 1,
      alpha: gsap.utils.random(0.1, defaultAlpha, 0.1),
    }));
  }

  function update({ x, y }) {
    for (const star of stars) {
      const DISTANCE = Math.sqrt(
        Math.pow(star.x - x, 2) + Math.pow(star.y - y, 2)
      );
      gsap.to(star, {
        scale: scaleMapper(Math.min(DISTANCE, vmin * proximityRatio)),
        alpha: alphaMapper(Math.min(DISTANCE, vmin * proximityRatio)),
      });
    }
  }

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {
      context.fillStyle = `hsla(0, 100%, 100%, ${star.alpha})`;
      context.beginPath();
      context.arc(star.x, star.y, (star.size / 2) * star.scale, 0, Math.PI * 2);
      context.fill();
    }
  }

  load();
  gsap.ticker.add(render);
  gsap.ticker.fps(24);
  window.addEventListener('resize', load);
  document.addEventListener('pointermove', update);

  return canvas;
}
