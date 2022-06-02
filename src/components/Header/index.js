import "./styles.css";

function Header({ showProducts, setSearchValue }) {
  return (
    <header className="headerPag">
      <h1>
        Burguer <span>Kenzie</span>
      </h1>
      <div className="search">
        <input
          placeholder="Digitar Pesquisa"
          onChange={(event) => {
            setSearchValue(event.target.value);
            showProducts(event.target.value);
          }}
        ></input>
        <button>Pesquisar</button>
      </div>
    </header>
  );
}

export default Header;
