/**
 * Created by cjpowers on 7/2/16.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/adminProductActions';
import ProductDetails from './ProductDetails';

class ProductDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      product: Object.assign({}, this.props.product),
      errors: {}
    };
    this.saveProduct = this.saveProduct.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.product.id != nextProps.product.id) {
      //Necessary to populate form when existing product is loaded directly
      this.setState({product: Object.assign({}, nextProps.product)});
    }
  }


  saveProduct(event) {
    event.preventDefault();
    console.log(this.props);
    this.state.product.ownerid = parseInt(this.props.user.user.id);
    console.log(this.state.product);
    this.props.actions.saveProduct(this.state.product);
    this.context.router.push('/products');
  }


  render() {
    console.log('This is my product details page state',this.props);
    console.log(this.state);
    return (
      <ProductDetails
        user={this.props.user}
        onSave={this.saveProduct}
        product={this.state.product}
        errors={this.state.errors}/>
    );
  }
}

ProductDetailsPage.propTypes = {
  product: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//this makes react-router available on this component
ProductDetailsPage.contextTypes = {
  router: PropTypes.object
};

function getProductById(products, id){
  const product = products.filter(product => product.id == id);
  if (product) return product[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.params.id; //from the path '/product/:id
  console.log('product id passed in',productId);
  let product = {id: '', title: '', price: 0.00, quantity: 0};

  if (productId && state.shopperProducts.length > 0) {
    product = getProductById(state.shopperProducts, productId)
    console.log('this is the product', product);
  }
  return {
    products: state.shopperProducts,
    product: product,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
