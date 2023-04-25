import gsap from 'gsap';

export default function Starscape({
  densityRatio = 0.5,
  sizeLimit = 5,
  defaultAlpha = 0.5,
} = {}) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  let stars = [];

  function load() {
    const VMIN = Math.min(window.innerHeight, window.innerWidth);
    const STAR_COUNT = Math.floor(VMIN * densityRatio);
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

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      context.fillStyle = `hsla(0, 100%, 100%, ${star.alpha})`;
      context.beginPath();
      context.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2);
      context.fill();
    });
  }

  function run() {
    load();
    render();
  }

  run();

  window.addEventListener('resize', run);

  return canvas;
}
