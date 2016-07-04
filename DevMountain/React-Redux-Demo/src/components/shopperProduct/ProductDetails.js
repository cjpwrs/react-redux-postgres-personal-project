/**
 * Created by cjpowers on 7/2/16.
 */
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ProductDetails = ({ product, user, className, onAddToCart, onDelete, onChange, loading, errors}) => {
  return (
    <div>
      <div className="details-page-favorite-box">
        <button className="details-page-favorite-button">Favorite</button>
        <div>
          <p>Like this item?</p>
          <p>Add it to your favorites to revisit it later.</p>
        </div>
      </div>
      <div className="details-page-img-holder">
        <img src={product.image_url} alt=""/>
      </div>
      <div className="details-page-product-info">
        <h2>{product.title}</h2>
        <h2>{product.price}</h2>
        <h3>Quantity</h3>
        <h3>{product.quantity}</h3>
      </div>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

ProductDetails.propTypes = {
  product: React.PropTypes.object.isRequired,
  allUsers: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object,
  onAddToCart: React.PropTypes.func
};

export default ProductDetails;
