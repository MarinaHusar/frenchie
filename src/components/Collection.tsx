import { ProductCard } from "./ProductCard";

export function Collection() {
  return (
    <section id="kollektion">
      <h2>Drei Halsbänder, ein Anspruch.</h2>
      <ProductCard
        name="Noir"
        material="Schwarzes Rindleder, Messingschnalle"
        price={49}
      />
      <ProductCard
        name="Cognac"
        material="Naturbraunes Leder, Messingschnalle"
        price={49}
      />
      <ProductCard
        name="Sauge"
        material="Salbeigrün gefärbt, Messingschnalle"
        price={54}
      />
    </section>
  );
}
