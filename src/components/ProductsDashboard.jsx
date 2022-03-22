import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getproductsData, sortProducts } from "../Redux/actions";

export const Products = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const data = useSelector(state => state.products)
  const isLoading = useSelector(state => state.isLoading)
  const isError = useSelector(state => state.isError)

  useEffect(() => {
    dispatch(getproductsData())
  }, [dispatch]);

  const handleSort = (e) => {
    let val = e.target.value

    dispatch(sortProducts(val))
  };
  return isLoading ? <div>..Loading</div> : (
    <>
      <h2>Movies</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        {/* map throught th products  list and display the results */}
        {data &&
          data.map((item) => {
            return <div key={item.id} className={"product-card"} onClick={() => navigate(`/products/${item.id}`)}>
              <img src={item.image}></img>
              <p>{item.title}</p>
              <p>{item.brand}</p>

              <p>{item.category}</p>
              <p>{item.price}</p>

            </div>;
          })}
      </div>
    </>
  );
};
