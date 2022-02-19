import ItemDetail from "./ItemDetail";
import { peliculas } from "./productos";

function ItemDetailContainer() {
  return <ItemDetail item={peliculas[0]} />;
}

export default ItemDetailContainer;
