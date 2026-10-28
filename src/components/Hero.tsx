import { useEffect, useRef } from "react";
const ANCHORS = [
  [1.5, 6.5, 7.2],
  [2.5, 5.8, 7.2],
  [3.5, 4.3, 8.6],
];
function getTargetTime(x: number, y: number): number {
  const gx = Math.min(Math.max(x, 0), 1) * 2;
  const gy = Math.min(Math.max(y, 0), 1) * 2;
  const col = Math.min(Math.floor(gx), 1);
  const row = Math.min(Math.floor(gy), 1);
  const fx = gx - col;
  const fy = gy - row;

  const top = ANCHORS[row][col] * (1 - fx) + ANCHORS[row][col + 1] * fx;
  const bottom =
    ANCHORS[row + 1][col] * (1 - fx) + ANCHORS[row + 1][col + 1] * fx;
  return top * (1 - fy) + bottom * fy;
}
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    let targetTime = getTargetTime(0.5, 0.5);
    let currentTime = targetTime;
    let frameId = 0;
    let lastFrame = performance.now();

    function handleMove(event: PointerEvent) {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      targetTime = getTargetTime(x, y);
    }

    function tick(now: number) {
      const dt = Math.min((now - lastFrame) / 1000, 0.1);
      lastFrame = now;
      currentTime += (targetTime - currentTime) * (1 - Math.exp(-dt * 7));

      const video = videoRef.current;
      if (video && video.duration && !video.seeking) {
        video.currentTime = currentTime;
      }
      frameId = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", handleMove);
    frameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <video
        ref={videoRef}
        className="hero-video"
        src="/frenchie.mp4"
        muted
        playsInline
        preload="auto"
      />
      <h1>Er schaut, wohin du schaust.</h1>
      <p className="hero-text">
        Halsbänder für Hunde mit Charakter. Handgenäht, pflanzlich gegerbt, mit
        Messingschild.
      </p>
      <a className="cta" href="#kollektion">
        Kollektion ansehen
      </a>
    </section>
  );
}
