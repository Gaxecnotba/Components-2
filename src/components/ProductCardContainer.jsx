import ProductCard from "./ProductCard";

export default function ProductCardContainer({ pros }) {
  return (
    <>
      <h1>Discover Your Favorites</h1>
      <div>
        {pros.products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
