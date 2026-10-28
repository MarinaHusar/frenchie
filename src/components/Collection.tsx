import { ProductCard } from "./ProductCard";

const products = [
  { name: "Noir", material: "Schwarzes Rindleder, Messingschnalle", price: 49 },
  {
    name: "Cognac",
    material: "Naturbraunes Leder, Messingschnalle",
    price: 49,
  },
  { name: "Sauge", material: "Salbeigrün gefärbt, Messingschnalle", price: 54 },
];

export function Collection() {
  return (
    <section className="collection" id="kollektion">
      <h2>Drei Halsbänder, ein Anspruch.</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            material={product.material}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
