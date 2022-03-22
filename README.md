https://movie-fake-server.herokuapp.com/products
​

- Create an application to get list of products and sort by price etc.
  ​
- Application will use react-router and redux to handle states
  ​
- It includes the following components

  - Navbar
  - Home - link - "/" - About - "/about" - link - "/about" - Movies - ''/products"

        - link - "/products"
        - Navbar or the header should contains all the three links (Home , About , and Products)

    ​

- On clicking Home user should redirect to "/home" route and display **Home** in **h2** tag , can add anything to make it better.
  ​
- On clicking About user should redirect to "/about" route and display **About** in **h2** tag, can add anything to make it better
  ​
- On clicking Movies user should redirect to "/products" route and make a request to https://movie-fake-server.herokuapp.com/products
  ​
- USE THUNK to make the request
  ​
- API call should have all action types (REQUEST ,SUCCESS and FAILURE)
  ​
- Display the properties in **div** tag as cards with a nice UI
  ​
- Products page should have a select tag where user can select to sort the products by **low to high** and **high to low ** price.
  ​
  - **low to high ** option should have a value **asc**
  - **high to low** option should have a value **desc**
    ​
- On selecting a particular sort type user should be able to sort the products and display the relevant data .
  ​
- Manage sorted data through store (no api call required)
  ​
- Bonus : On clicking each products card user should be able to navigate to "/products/:id" and display the complete details
  ​
- UI should look clean. Keep code clean
  ​

​

- Uploading Instructions:
  - Upload .zip of your source code (**DO NOT UPLOAD NODE MODULES**)
    - Upload github url of your repo in the comment of same file.
  - in the 'website' section add only deployed link. all routes should work
