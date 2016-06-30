/**
 * Created by cjpowers on 6/26/16.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const ProductListRow = ({product, onDelete}) => {

  
  
  return(
    <div className="product-box-admin">
      <div className="product-img-holder-admin">
        <Link to={'/product/' + product.id}>
          <img src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiQ7rGnncvNAhUF_IMKHUJcDsQQjRwIBw&url=http%3A%2F%2Fwww.clipartpanda.com%2Fcategories%2Fcookie-with-glasses&psig=AFQjCNHSOTBmTfTfEqUWCvDyv-xxSWK84g&ust=1467220713766072" alt=""/>
        </Link>
      </div>
      <div>
        <h4>{product.title}</h4>
        <h5>Powershop | {product.price}</h5>
      </div>
      <div className="product-admin-options">
        <Link to={'/product/' + product.id}><div className="product-admin-option-single"><span className="glyphicon glyphicon-edit"></span></div></Link>
        <div onClick={onDelete(product.id)} ><span className="glyphicon glyphicon-trash"></span></div>
      </div>
    </div>
  );
};

ProductListRow.propTypes = {
  product: PropTypes.object.isRequired,
  onDelete: PropTypes.func
};

export default ProductListRow;
