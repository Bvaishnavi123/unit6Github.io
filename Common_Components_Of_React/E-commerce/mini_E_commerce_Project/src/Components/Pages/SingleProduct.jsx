import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentProductData } from "../../Redux/Product/action";
import { useParams } from "react-router-dom";
import { Spinner ,Text} from "@chakra-ui/react";

import "../Styles/shop.css";

export const SingleProduct = () => {
  let dispatch = useDispatch();
  let {id}= useParams()
  const currentPro = useSelector((store) => store.storeData.currentProduct);
  console.log(currentPro)
  const isLoading = useSelector((store) => store.storeData.isCurrProLoading);
  const isError = useSelector((store) => store.storeData.isCurrProError);
  useEffect(() => {
     
      dispatch(getCurrentProductData(id));
    
  }, []);

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
          
        </div>
      )}
    </div>
  );
};
