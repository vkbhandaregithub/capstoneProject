import React from 'react';

function DishCard({ name, price, description, images, category }) {
  return (
    <div className="product-card border-1 bg-info mx-1" style={{"width":"24%","marginTop":"9vh"}}>
      <img src={`${images}`} alt={name} className='rounded' style={{"width":"100%","height":"200px" ,}}/>
      <div className="product-info p-2">
        <h5>{name}</h5>
        <p className="product-category">{category}</p>
        <p className="product-price">${price.toFixed(2)}</p>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
}

export default DishCard;
