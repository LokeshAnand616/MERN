import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../api/graphql/queries/productData";

const ProductData = () => {
  const { loading, error, data } = useQuery(GET_PRODUCT);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.getProducts.map((product) => ( 
        <li key={product.id}>
          {product.Product_name} - {product.Description} - ${product.Price}
        </li>
      ))}
    </ul>
  );
};

export default ProductData;
