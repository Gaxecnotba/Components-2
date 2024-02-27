export default function ProductCard(props) {
  return (
    <>
      <div className="product-card" style={{ border: "1px solid #ccc" }}>
        <img
          src={
            props.imageUrl || "https://placehold.co/400x200.jpg?text=Product"
          }
          alt={props.name}
        />
        <h3> {props.name} </h3>
        <p> {props.description} </p>
        <div className="price">${props.price}</div>
        {props.isInStock && <p>Avaible</p>}
        {!props.isInStock && <p>Unvailable</p>}
        <button>Add to Cart</button>
      </div>
    </>
  );
}
