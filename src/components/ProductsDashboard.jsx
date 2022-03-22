import React, { useEffect } from "react";

export const Products = () => {
  // to get all products list on component mounts
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData())
  }, [dispatch]);

  //    filter by genre
  const handleSort = (e) => {
    // dispach filterby genre action to the store
  };
  return (
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
          data.map(() => {
            return <div>{/* display the results here */}</div>;
          })}
      </div>
    </>
  );
};
