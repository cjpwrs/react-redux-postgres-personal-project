/**
 * Created by cjpowers on 7/2/16.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shoppingCartActions from '../../actions/shoppingCartActions';
import ProductDetails from './ProductDetails';

class ProductDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      product: Object.assign({}, this.props.product),
      user: this.props.user,
      cart: {},
      errors: {}
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.product.id != nextProps.product.id) {
      //Necessary to populate form when existing product is loaded directly
      this.setState({product: Object.assign({}, nextProps.product)});
    }
  }


  addToCart(event) {
    event.preventDefault();
    console.log(this.props);
    let userid = this.state.user.user.id;
    let productid = this.state.product.id;
    let cartid = this.props.cart[0].cartid;
    console.log(userid, productid, cartid);
    this.props.actions.updateCart(userid, productid, cartid, 1, this.props.cart);
    //this.context.router.push('/products');
  }


  render() {
    console.log('This is my product details page props',this.props);
    console.log(this.state);
    return (
      <ProductDetails
        user={this.props.user}
        onSave={this.saveProduct}
        product={this.state.product}
        errors={this.state.errors}
        onAddToCart={this.addToCart}/>
    );
  }
}

ProductDetailsPage.propTypes = {
  product: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired
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
    user: state.user,
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(shoppingCartActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
