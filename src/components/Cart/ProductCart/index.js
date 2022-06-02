function ProductCart({ product, currentSale, setCurrentSale }) {
  function removeProduct(productID) {
    setCurrentSale(
      currentSale.filter((product) => product.id !== Number(productID))
    );
  }

  return (
    <li>
      <div className="infosCart">
        <figure>
          <img src={product.img} alt={product.name} />
        </figure>
        <div className="detailsProductCart">
          <h3>{product.name}</h3>
          <p>
            <span>{product.category}</span>
          </p>
        </div>
      </div>
      <button
        id={product.id}
        onClick={(event) => removeProduct(event.target.id)}
      >
        Remover
      </button>
    </li>
  );
}

export default ProductCart;
