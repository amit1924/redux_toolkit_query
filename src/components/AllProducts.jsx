import { useGetAllProductQuery } from "../app/services/fetch";
const AllProducts = () => {
  // const res = useGetAllProductQuery();
  // console.log(res);

  const { data, isError, isLoading } = useGetAllProductQuery();
  console.log(data);

  if (isError) {
    return <h1>Error while fetching..</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div>
        {data?.products.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
