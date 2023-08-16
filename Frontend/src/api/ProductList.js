// import { useEffect, useState } from 'react';

const ProductList = async () => {

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://fakestoreapi.com/products');
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.log('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // return (
  //   // <div>
  //   //   {data.map((product) => (
  //   //     <div key={product.id}>{product.title}</div>
  //   //   ))}
  //   // </div>
  //   <ul>{data}</ul>
  // );

  // const [data, setData] = useState([]);


  // const fetchData = async () => {
  //   const response = await fetch("https://fakestoreapi.com/products");
  //   const data = await response.json();
  //   return setData(data);
  // }

  // useEffect(() => {
  //   fetchData();
  // },[])

  // return data;
    try{
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching data:', error);
      return error;
    }

};

// export default ProductList();
export const products = await ProductList();
