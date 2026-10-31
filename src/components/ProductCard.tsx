type ProductCardProps = {
  name: string;
  material: string;
  price: number;
  image: string;
};

export function ProductCard({
  name,
  material,
  price,
  image,
}: ProductCardProps) {
  return (
    <article className="card">
      <img
        className="card-image"
        src={image}
        alt={`Frenchie trägt das Halsband ${name}`}
      />
      <h3>{name}</h3>
      <p>{material}</p>
      <p>{price} €</p>
    </article>
  );
}
