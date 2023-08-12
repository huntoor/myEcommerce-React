// // this file will return all products from the api listed
// // give product.jsx list of products 

// import Product from "./product";

// import React, { useEffect, useState } from 'react';

// const ProductList = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.log('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);
  

//   return (
//     <>
//       {data.map((product) => (
//         <Product data={product} />
//       ))}
//     </>
//   );
// };

// export default ProductList;