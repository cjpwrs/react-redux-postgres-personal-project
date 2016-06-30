/**
 * Created by cjpowers on 6/26/16.
 */
import React, {PropTypes} from 'react';
import ProductListRow from './ProductListRow';
import {Link} from 'react-router';

const ProductList = ({products, onCreate, onDelete}) => {


  return (
    <div className="product-holder-admin">
      <div onClick={onCreate} className="product-box-admin pointer">
        <div className="product-img-holder-admin blue create-product">
          <span onClick={onCreate} className="glyphicon glyphicon-plus blue"></span>
          <h5>Add a Listing</h5>
        </div>
        <div className="product-info-holder-admin">

        </div>
      </div>
      {products.map(product =>
          <div key={product.id} className="product-box-admin">
            <div className="product-img-holder-admin">
              <Link to={'/product/' + product.id}>
                <img src={product.image_url} alt=""/>
              </Link>
            </div>
            <div>
              <h4>{product.title}</h4>
              <h5>Powershop | {product.price}</h5>
            </div>
            <div className="product-admin-options">
              <Link to={'/product/' + product.id}><div className="product-admin-option-single"><span className="glyphicon glyphicon-edit"></span></div></Link>
              <div  onClick={onDelete.bind(null, product.id)} ><span value={product.id} className="glyphicon glyphicon-trash"></span></div>
            </div>
          </div>
        //<ProductListRow key={product.id} product={product} onDelete={onDelete} />
      )}
    </div>

  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onDelete: PropTypes.func
};

export default ProductList;
