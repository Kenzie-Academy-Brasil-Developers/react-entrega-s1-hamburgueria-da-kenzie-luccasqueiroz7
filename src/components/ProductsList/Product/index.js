function Product({ product, handleClick }) {
  return (
    <li>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <div className="detailsCard">
        <h2>{product.name}</h2>
        <p>
          <span>{product.category}</span>
        </p>
        <p>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button onClick={() => handleClick(product.id)}>Adicionar</button>
      </div>
    </li>
  );
}

export default Product;
