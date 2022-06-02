import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import rectangleDiv from "./assets/Rectangle 14.png";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  function showProducts(inputValue) {
    setFilteredProducts(
      products?.filter((product) => {
        return (
          product.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
        );
      })
    );
  }

  function handleClick(productId) {
    const findProduct = products.find((product) => product.id === productId);
    const findProductCurrentSale = currentSale.find(
      (product) => product.id === productId
    );
    findProductCurrentSale === undefined &&
      setCurrentSale([findProduct, ...currentSale]);
  }

  return (
    <>
      <Header showProducts={showProducts} setSearchValue={setSearchValue} />
      <div className="App">
        {filteredProducts.length > 0 ? (
          <ProductsList
            products={filteredProducts}
            handleClick={handleClick}
            searchValue={searchValue}
          />
        ) : (
          <ProductsList products={products} handleClick={handleClick} />
        )}
        <Cart
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          rectangleDiv={rectangleDiv}
        />
      </div>
    </>
  );
}

export default App;
