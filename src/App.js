import './App.css';
import Menu from "./components/Menu";
import Carousel from "./components/Carousel";
import Promotion from "./components/Promotion";
import Products from "./components/Products";

function App() {
  return (
    <>
      <div>
        {/*BEGIN NAVBAR*/}
        <Menu />
        {/* END NAVBAR */}
        {/* BEGIN CAROUSEL */}
        < Carousel />
        {/* END CAROUSEL */}
        {/* BEGIN SMARTPHONE */}
        <Products />
        {/* END SMARTPHONE */}
        {/* BEGIN PROMOTOPN */}
        <Promotion />
        {/* END PROMOTION */}
      </div>

    </>
  );
}

export default App;
