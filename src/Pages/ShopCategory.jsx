import React, { useContext } from 'react';
import "./ShopCategory.css";
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from "../Components/Assests/dropdown_icon.png";


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  
  return (
    <div className='shop-category'>
      <img src={props.banner} alt='banner' width={1000} height={250} />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt='dropdown_icon'/>
       </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i) => {
          if (props.category === item.category) {

          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory;