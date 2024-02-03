import { useAddNewProductMutation } from "../app/services/fetch";

const AddNewProduct = () => {
  const [addNewProduct, { data, error, isError, isLoading }] =
    useAddNewProductMutation();

  async function handleAddNewProduct() {
    try {
      const newProductData = {
        id: 1,
        title: "Sony Xperia",
        description: "Launched with AMOLED display with Dolby Atmos",
      };

      console.log(
        `Attempting to add new product: ${JSON.stringify(newProductData)}`
      );

      const response = await addNewProduct(newProductData);
      console.log("API Response:", response);
    } catch (error) {
      console.error(`Error while adding new product: ${error.message}`);
    }
  }

  return (
    <div>
      {isError && <h1>Error while adding new product: {error?.message}</h1>}
      {isLoading && <h1>Loading...</h1>}

      {data && (
        <div>
          <h1>{data.id}</h1>
          <h1>{data.title}</h1>
          <h1>{data.description}</h1>
        </div>
      )}

      <button onClick={handleAddNewProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};

export default AddNewProduct;
