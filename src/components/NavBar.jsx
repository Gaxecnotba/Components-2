export default function NavBar({ user }) {
  return (
    <>
      <div>
        {user ? (
          <div>
            <h1>{`Welcome, ${user.firstName}`}</h1>
            <p>{`${user.itemsInCart} in your cart`}</p>
          </div>
        ) : (
          <h1>Login</h1>
        )}
      </div>

      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
    </>
  );
}
