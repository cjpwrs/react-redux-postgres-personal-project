/**
 * Created by cjpowers on 7/1/16.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/adminProductActions';
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
  }

  loadProducts(userId){
    this.props.actions.loadProducts(userId);
  }

  onTitleChange(event) {
    let product = this.state.product;
    product.title = event.target.value;
    this.setState({product: product});
  }

  onClickSave() {
    this.props.actions.createProduct(this.state.product);
  }


  redirectToAddProductPage() {
    browserHistory.push('/product');
  }

  render() {
    //this is called destructuring
    const {products} = this.props;
    //console.log('these are the props for the shopping page',this.props);
    //console.log('Here are the props that we were passed in ', this.props);
    //console.log('here are the products that we receive from props ',products);

    return (
      <div className="manage-product-user-screen">
        <ProductList products={products}
                     onCreate={this.redirectToAddProductPage}
                     onDelete={this.deleteProduct}
        />

      </div>
    );
  }
}
ProductPage.propTypes = {
  user: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps){
  return{
    products: state.shopperProducts,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
