import ItemDetailContainer from "./component/ItemDetailContainer";
import ItemListContainer from "./component/ItemListContainer";
import Contacto from "./component/Contacto";
import Navbar from "./component/Navbar";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./component/Carrito";
import Checkout from "./component/Checkout";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
            
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
