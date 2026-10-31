import { ProductCard } from "./ProductCard";

const products = [
  {
    name: "Noir",
    material: "Schwarzes Rindleder, Messingschnalle",
    price: 49,
    image: "/products/noir.jpg",
  },
  {
    name: "Cognac",
    material: "Naturbraunes Leder, Messingschnalle",
    image: "/products/cognac.jpg",
    price: 49,
  },
  {
    name: "Sauge",
    material: "Salbeigrün gefärbt, Messingschnalle",
    price: 54,
    image: "/products/sauge.jpg",
  },
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
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}
