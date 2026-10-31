import { useState } from "react";

const sizes = [
  { name: "S", range: "26 bis 32 cm" },
  { name: "M", range: "32 bis 38 cm" },
  { name: "L", range: "38 bis 44 cm" },
  { name: "XL", range: "44 bis 50 cm" },
];

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
      <div className="advisor-info">
        <h2>Das richtige Maß in zehn Sekunden.</h2>
        <p className="advisor-lead">
          Miss den Halsumfang mit einem weichen Maßband an der Stelle, wo das
          Halsband sitzt. Zwei Finger sollten darunter passen.
        </p>
        <table className="size-table">
          <thead>
            <tr>
              <th>Größe</th>
              <th>Halsumfang</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((item) => (
              <tr
                key={item.name}
                className={item.name === size ? "active" : ""}
              >
                <td>{item.name}</td>
                <td>{item.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="advisor-tool">
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
      </div>
    </section>
  );
}
