import "./styles.css";
import Product from "./Product";

function ProductsList({ products, handleClick, searchValue }) {
  return (
    <div className="showcase">
      {searchValue && (
        <p>
          Resultados para: <span>{searchValue}</span>
        </p>
      )}

      <ul className="productsShowcase">
        {products?.map((product) => (
          <Product
            product={product}
            handleClick={handleClick}
            key={product.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
