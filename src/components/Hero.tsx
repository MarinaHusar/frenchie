export function Hero() {
  return (
    <section className="hero" id="top">
      <video
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
