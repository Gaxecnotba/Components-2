export default function ProductCard(props) {
  function MouseOver() {
    console.log("Price", props.price);
  }
  function AddtoCartClick() {
    props.onAddToCart(props.name);
  }
  return (
    <>
      <div
        className="product-card"
        style={{ border: "1px solid #ccc" }}
        onMouseOver={MouseOver}
      >
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
        <button onClick={AddtoCartClick}>Add to Cart</button>
      </div>
    </>
  );
}
