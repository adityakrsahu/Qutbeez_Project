import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [ProductData, setProductData] = useState([]);

  const LoadData = () => {
    let url = "https://fakestoreapi.com/products/";
    axios.get(url).then((response) => {
      setProductData(response.data);
    });
  };

  useEffect(() => {
    LoadData();
  }, []);

  return (
    <>
      <div id="hom1">
        <div id="cont1">
          <h1>STYLIST PICKS BEAT</h1>
          <h1>THE HEAT</h1>
          <br />
          <Link to="#">
            <button id="btn1">SHOP NOW</button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <div style={{ fontSize: "15px", lineHeight: "15px" }}>
        <h1>Discover NEW Arrivals</h1>
        <h3>Recently Added Shirts!</h3>
      </div>
      <div id="product" className="pro-container">
        {ProductData.map((product) => (
          <div className="product">
            <img src={product.image} alt={product.title} width="300" height="300" />
            <h3>Name: {product.title}</h3>
            <h4>Price: ${product.price}</h4>
            <h4>Category: {product.category}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
