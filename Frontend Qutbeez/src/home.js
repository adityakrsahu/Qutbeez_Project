import img7 from "./images/img7.jpg";
import { useState,useEffect } from "react";
import axios from "axios";

const Home = () => {
  const[mydata,setmydata]=useState([]);

  const LoadData=()=>{
    let url="http://127.0.0.1:8000/ProductList/";
    axios.get(url).then((res)=>{
      setmydata(res.data);
    })

    .catch((error)=>{
      console.error("Error Fetching Data: ",error)
    })
  }

  useEffect(()=>{
    LoadData();
  },[]);

const productAns = mydata.map((product) => {
  return (
    <div className="pro-container" key={product.id}>
      <div className="product">
        <img src={product.image} alt="" width="300" height="300" />
        <h3>Name : {product.name}</h3>
        <h4>Price : {product.price}</h4>
        {/* <h4>Description : {product.description}</h4> */}
      </div>
    </div>
  );
});

  return (
    <>
      <div id="hom1">
        <div id="cont1">
            <h1>STYLIST PICKS BEAT </h1>    
            <h1>THE HEAT  </h1>
            <br/>
            <button id="btn1">SHOP NOW</button>
        </div>
      </div>
      <br/>
      <br/>

      <div style={{fontSize:"15px", lineHeight:"15px"}}>
        <h1>Discover NEW Arrivals </h1>
        <h3>Recently Added Shirts!</h3>
      </div>

      <div id="product">

        {productAns}

      </div>
    
      <div style={{fontSize:"15px", lineHeight:"15px"}}>
        <h1>The ELEGANT Arrival for Women</h1>
        <h3>Recently Added Product</h3>
      </div>
    </>
  );
};

export default Home;