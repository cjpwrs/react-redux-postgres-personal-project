/**
 * Created by cjpowers on 6/26/16.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';
import ProductList from './ProductList';
import {browserHistory} from 'react-router';

class ProductPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddProductPage = this.redirectToAddProductPage.bind(this);
    this.state = {
      product: {title: "", id:6}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  onTitleChange(event) {
    let product = this.state.product;
    product.title = event.target.value;
    this.setState({product: product});
  }

  onClickSave() {
    this.props.actions.createProduct(this.state.product);
  }

  deleteProduct(id) {
    let productId = id;
    //event.preventDefault();
    console.log(this.state);
    this.props.actions.deleteProduct(productId);
    //this.context.router.push('/products');

  }

  productRow(product, index) {
    return <div key={index}>{product.title}</div>;
  }

  redirectToAddProductPage() {
    browserHistory.push('/product');
  }

  render() {
    //this is called destructuring
    const {products} = this.props;

    return (
      <div className="manage-product-user-screen">
        <h3>Stock your shop</h3>
        <p>Add as many listings as you can. Ten or more would be a great start.
         More listings means more changes to be discovered!</p>
        <ProductList products={products}
                      onCreate={this.redirectToAddProductPage}
                      onDelete={this.deleteProduct}
        />

      </div>
    );
  }
}
ProductPage.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps){
  return{
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
