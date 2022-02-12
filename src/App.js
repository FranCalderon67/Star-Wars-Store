import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer title="Películas" />
    </>
  );
}

export default App;
