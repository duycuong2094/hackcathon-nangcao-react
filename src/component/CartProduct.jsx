import React, { useState } from 'react';

function CartProduct(props) {
  const handleClickClose = () => {
    props.handClick(false);
  }
  const handleCong = (id) => {
    const updatedListProduct = [...props.listProduct]; 
    updatedListProduct[id].sl += 1; 
    props.setListProduct(updatedListProduct); 
  }
  const handleTru = (id) => {
    const updatedListProduct = [...props.listProduct]; 
    if(updatedListProduct[id].sl>1){
      updatedListProduct[id].sl -= 1; 
      props.setListProduct(updatedListProduct); 
    }else{
      updatedListProduct.splice(id,1);
      props.setListProduct(updatedListProduct); 

    }
   
  }
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const product of props.listProduct) {
      totalPrice += product.price * product.sl;
    }
    return totalPrice;
  };
  
  return (
    <div className='cartProduct'>
      <h2>Cart</h2>
      <div className='buyProduct'>
        {props.listProduct.map((product, index) => (
          <div className='productCart' key={index}>
            <img className='imgCart' src={product.img} alt="" />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={()=>handleCong(index)}>Thêm</button> <span>{product.sl}</span><button onClick={()=>handleTru(index)}>Bớt</button>
          </div>
        ))}
      </div>
      <div className='buttonClose'>
        <div className='buttonClose-1'>{calculateTotalPrice()}</div>
        <div className='buttonClose-2' onClick={handleClickClose}>Close</div>
      </div>
    </div>
  )
}

export default CartProduct;
