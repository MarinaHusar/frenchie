type ProductCardProps = {
  name: string;
  material: string;
  price: number;
};

export function ProductCard({ name, material, price }: ProductCardProps) {
  return (
    <article className="card">
      <h3>{name}</h3>
      <p>{material}</p>
      <p>{price} €</p>
    </article>
  );
}
