import { useEffect, useRef } from "react";
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    function handleMove(event: PointerEvent) {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      const video = videoRef.current;
      if (video && video.duration) {
        video.currentTime = x * video.duration;
      }
    }

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
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
