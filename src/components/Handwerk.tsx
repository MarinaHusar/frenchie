const facts = [
  {
    title: "Pflanzlich gegerbt",
    text: "Weiches Leder ohne Chrom. Es wird mit der Zeit dunkler und bekommt Patina.",
  },
  {
    title: "Massives Messing",
    text: "Schnalle und Namensschild aus Messing. Das Schild lässt sich mit dem Namen deines Hundes gravieren.",
  },
  {
    title: "Flach genäht",
    text: "Die Nähte liegen außen, die Innenseite bleibt glatt. Das schont Haut und Fell.",
  },
];

export function Handwerk() {
  return (
    <section className="handwerk" id="handwerk">
      <h2>Was am Hals sitzt, muss halten.</h2>
      <div className="facts">
        {facts.map((fact) => (
          <div className="fact" key={fact.title}>
            <h3>{fact.title}</h3>
            <p>{fact.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
