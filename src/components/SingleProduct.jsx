import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/actions";

export const SingleMovieDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, [])
  const product = useSelector(state => state.singleProduct)
  const isLoading = useSelector(state => state.isLoading)


  // make a request to get the details
  return isLoading ? <div>...Loading</div> : <div className="singleProduct">
    <img src={product.image}></img>
    <p>{product.title}</p>
    <p>{product.brand}</p>

    <p>{product.category}</p>
    <p>{product.price}</p>
  </div>;
};
