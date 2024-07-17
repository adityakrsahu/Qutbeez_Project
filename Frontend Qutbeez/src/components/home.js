
import { useState,useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";


const Home = () => {
  const[mydata,setmydata]=useState([]);

  const LoadData=()=>{
    let url="http://localhost:4000/product";
    axios.get(url).then((res)=>{
      setmydata(res.data);
    })
  }

  useEffect(()=>{
    LoadData();
  },[]);
  const productAns=mydata.map((key)=>{
    return(
      <>
      <div className="pro-container">
        <div className="product">
          <img src={"image/"+ key.image} width="300" height="300"/>
          <h3>Name : {key.name}</h3>
          <h4>Price : {key.price}</h4>
          <h4>Brand : {key.brand}</h4>
        </div>
      </div>
      </>
    )
  })
  return (
    <>
      <div id="hom1">

        <div id="cont1">
            <h1>STYLIST PICKS BEAT </h1>    
            <h1>THE HEAT  </h1>
            <br/>
            <Link to="#"><button id="btn1">SHOP NOW</button></Link>
            
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

      <ProductCard/>
    
    </>
  );
};

export default Home;