import React, { useState } from "react";
import CartProduct from "./CartProduct";

function ShopProduct() {
  const [data, setData] = useState([
    {
      img: "https://images.foody.vn/BlogsContents/foody-chan-ga-sa-tac-shop-online-ton-dan-874-636555978186666412.jpg",
      name: "Cơm gà",
      price: 120000,
      sl:1,
    },
    {
      img: "https://giadinh.mediacdn.vn/296230595582509056/2022/1/14/an-vat-4-1-003-1642119215960-1642119216042694412936.jpg",
      name: "Cơm bò",
      price: 110000,
      sl:1,
    },
    {
      img: "https://cdn.vietnamtours247.com/2020/01/24B88CD9-E00D-4793-A3A8-0C03175A3DAE.jpeg",
      name: "Cơm cánh gà",
      price: 100000,
      sl:1,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2O4hRPD1SoxRn68djbD3y8Cn6jvsIBWS3Q&usqp=CAU",
      name: "Cơm đùi gà",
      price: 90000,
      sl:1,
    },
    {
      img: "https://images.foody.vn/BlogsContents/foody-chan-ga-sa-tac-shop-online-ton-dan-874-636555978186666412.jpg",
      name: "Cơm chân gà",
      price: 80000,
      sl:1,
    },
    {
      img: "https://images.foody.vn/BlogsContents/foody-chan-ga-sa-tac-shop-online-ton-dan-874-636555978186666412.jpg",
      name: "Cơm ức gà",
      price: 70000,
      sl:1,
    },
  ]);
  const [statusCart,setStatusCart]=useState(false);
  const [arrCart,setArrayCart]=useState([])
  const handleClickCart=()=>{
    setStatusCart(!statusCart)
  }
  const handClick=(close)=>{
    setStatusCart(close)
  }
  const addToCart=(index)=>{
    const cart =data[index]
  setArrayCart((prevArrCart) => [...prevArrCart, cart]);
  }
  return (
    <div>
      {statusCart?<CartProduct listProduct={arrCart} setListProduct={setArrayCart} handClick={handClick}/>:""}
      <div className="tiltle">
        <h1>Shop Product</h1>
        <h2 onClick={handleClickCart}>My Cart <span className="lengtCart">{arrCart.length}</span></h2>
      </div>

      <div className="ContainerProduct">
        {data.map((product,index) => (
          <div className="product" key={index}>
            <img
            className="imgShop"
              src={product.img}
              alt=""
            />{" "}
            <br />
            <strong>{product.name}</strong>
            <p>{product.price}</p>
            <button className="buttonsHOP" onClick={()=>{addToCart(index)}}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopProduct;
