import { useState } from "react";

function getSize(cm: number): string | null {
  if (cm >= 26 && cm <= 32) return "S";
  if (cm > 32 && cm <= 38) return "M";
  if (cm > 38 && cm <= 44) return "L";
  if (cm > 44 && cm <= 50) return "XL";
  return null;
}

export function SizeAdvisor() {
  const [cm, setCm] = useState(35);
  const size = getSize(cm);

  return (
    <section className="advisor" id="groesse">
      <h2>Das richtige Maß in zehn Sekunden.</h2>
      <label htmlFor="cm">Halsumfang deines Hundes in cm</label>
      <input
        id="cm"
        type="number"
        value={cm}
        onChange={(event) => setCm(Number(event.target.value))}
      />
      {size ? (
        <p>
          Größe {size} passt für {cm} cm Halsumfang.
        </p>
      ) : (
        <p>
          Keine passende Größe gefunden. Schreib uns, wir finden eine Lösung.
        </p>
      )}
    </section>
  );
}
