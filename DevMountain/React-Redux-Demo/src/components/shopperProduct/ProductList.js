/**
 * Created by cjpowers on 7/1/16.
 */
import React, {PropTypes} from 'react';

import {Link} from 'react-router';

const ProductList = ({products, onCreate, onDelete}) => {
//   <div  onClick={onDelete.bind(null, product.id)} ><span value={product.id} className="glyphicon glyphicon-trash"></span></div>


  return (
    <div className="product-holder-shopping">
      {products.map(product =>
          <div key={product.id} className="product-box-shopping">
            <div className="product-img-holder-shopping">
              <Link to={'/shop/' + product.id}>
                <img src={product.image_url} alt=""/>
              </Link>
            </div>
            <div>
              <h4>{product.title}</h4>
              <h5>Powershop | <span className="green">${product.price}</span></h5>
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
