/**
 * Created by cjpowers on 7/4/16.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ShoppingCart = ({products, cart, onCreate, onDelete}) => {


  return (
    <div className="cart-item-holder">
      {cart.map(cart =>
          <div key={cart.id} className="cart-box">
            <div className="cart-img-holder">
              <Link to={'/shop/' + cart.productid}>
                <img src={cart.image_url} alt=""/>
              </Link>
            </div>
            <div>
              <h4>{cart.title}</h4>
              <h5>Powershop | {cart.price}</h5>
            </div>
            <div className="cart-options">
              <Link to={'/shop/' + cart.productid}><div className="product-admin-option-single"><span className="glyphicon glyphicon-edit"></span></div></Link>
              <div  onClick={onDelete.bind(null, cart.productid)} >Remove</div>
            </div>
          </div>
      )}
    </div>

  );
};

ShoppingCart.propTypes = {
  products: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  onDelete: PropTypes.func
};

export default ShoppingCart;
