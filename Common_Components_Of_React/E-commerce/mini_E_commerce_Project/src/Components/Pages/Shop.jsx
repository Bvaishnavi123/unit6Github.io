import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../../Redux/Product/action";
import { Spinner , Text} from "@chakra-ui/react";
import { Product } from "../Product";
import "../Styles/shop.css";

export const Shop = () => {
  let dispatch = useDispatch();
  const products = useSelector((store) => store.storeData.storeData);
  //console.log(products);
  const isLoading = useSelector((store) => store.storeData.isLoading);
  const isError = useSelector((store) => store.storeData.isError);
  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getData());
    }
  },[dispatch,products.length]);

  return (
    <div>
      {isLoading ? (
        <div style={{ top: "50%", position: "absolute", left: "50%" }}>
          {" "}
          <Spinner
            thickness="4px"
            speed="0.85s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            width="100px"
          />
        </div>
      ) : isError ? (
        <Text>Something went wrong</Text>
      ) : (
        <div id="productContainer">
          {products.length > 0 &&
            products.map((pro) => {
              return <Product key={pro.id} product={pro}></Product>;
            })}
        </div>
      )}
    </div>
  );
};
