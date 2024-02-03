import AllProducts from "./components/AllProducts";

import SpecificProduct from "./components/specificProduct";

import AddNewProduct from "./components/AddNewProduct";
import UpdateProduct from "./components/UpdateProduct";
const App = () => {
  return (
    <>
      <div>
        <AllProducts />
        <SpecificProduct />
        <AddNewProduct />
        <UpdateProduct productId={4} />
      </div>
    </>
  );
};

export default App;
