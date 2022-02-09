import NavBar from "./components/NavBar";
import ItemList from "./components/ItemListContainer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ItemList title="Películas" />
    </>
  );
}

export default App;
