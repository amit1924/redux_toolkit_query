import { useGetProductByIdQuery } from "../app/services/fetch.js";

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(1);

  if (isError) {
    return <h1>Error while fetching..</h1>;
  }

  if (isLoading) {
    return <h1>isLoading...</h1>;
  }

  return (
    <div>
      <h1>{data?.brand}</h1>
      <p>{data?.title}</p>
      <p>{data?.description}</p>
    </div>
  );
};

export default SpecificProduct;
