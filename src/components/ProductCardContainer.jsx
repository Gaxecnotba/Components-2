import ProductCard from "./ProductCard";

export default function ProductCardContainer(props) {
  function EventAddCart(productName) {
    alert(`You added ${productName}`);
  }

  return (
    <>
      <h1>Discover Your Favorites</h1>
      <div className="product-list">
        {props.products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={EventAddCart}
          />
        ))}
      </div>
    </>
  );
}
