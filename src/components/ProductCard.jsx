export default function ProductCard({
  name,
  description,
  price,
  imageUrl,
  isInStock,
}) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        maxWidth: "400px",
      }}
    >
      <img
        src={pros.imageUrl || "https://placehold.co/400x200.jpg?text=Product"}
        alt={pros.name}
      />
      <h3>{name.name}</h3>
      <p>{pros.description}</p>
      <div className="price">${pros.price}</div>
      {pros.isInStock && <p>Unavaible</p>}
      <button>Add to Cart</button>
    </div>
  );
}
