import "./styles.css";
import ProductCart from "./ProductCart";
import emptyCartIMG from "../../assets/Frame 122.png";

function Cart({
  cartTotal,
  setCartTotal,
  currentSale,
  setCurrentSale,
  rectangleDiv,
}) {
  function totalPrice() {
    setCartTotal(
      currentSale.reduce((acc, product) => {
        return acc + product.price;
      }, 0)
    );

    return cartTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div className="cart">
      <header className="headerCart">Carrinho de compras</header>

      {currentSale.length < 1 ? (
        <img src={emptyCartIMG} alt="emptyCart" id="emptyCart" />
      ) : (
        <>
          <ul>
            {currentSale?.map((product) => (
              <ProductCart
                product={product}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
                key={product.id}
              />
            ))}
          </ul>
          <footer className="footerCart">
            <div>
              <img src={rectangleDiv} alt="-"></img>
            </div>
            <p>
              Total <span>{totalPrice()}</span>
            </p>
            <button onClick={() => setCurrentSale([])}>Remover Todos</button>
          </footer>
        </>
      )}
    </div>
  );
}

export default Cart;
