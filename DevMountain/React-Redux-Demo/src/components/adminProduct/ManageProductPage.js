import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/adminProductActions';
import ProductForm from './ProductForm';
import { categories, what_is_it, when_was_it_made, who_made_it } from '../../constants/constantSelectValues';

class ManageProductPage extends React.Component {
    constructor(props, context) {
        super(props, context);

      this.state = {
        product: Object.assign({}, this.props.product),
        errors: {}
      };

      this.updateProductState = this.updateProductState.bind(this);
      this.saveProduct = this.saveProduct.bind(this);
      this.deleteProduct = this.deleteProduct.bind(this);
    }

  componentWillReceiveProps(nextProps) {
    if(this.props.product.id != nextProps.product.id) {
      //Necessary to populate form when existing product is loaded directly
      this.setState({product: Object.assign({}, nextProps.product)});
    }
  }

  updateProductState(event) {
    const field = event.target.name;
    let product = this.state.product;
    product[field] = event.target.value;
    return this.setState({product: product})
  }

  saveProduct(event) {
    event.preventDefault();
    console.log(this.props)
    this.state.product.ownerid = parseInt(this.props.user.user.id);
    console.log(this.state.product);
    this.props.actions.saveProduct(this.state.product);
    this.context.router.push('/products');
  }

  deleteProduct(event) {
    event.preventDefault();
    console.log(this.state.product);
    this.props.actions.deleteProduct(this.state.product.id);
    this.context.router.push('/products');

  }

    render() {
        return (
            <ProductForm
              user={this.props.user}
              productCategories={categories}
              who_made_it = {who_made_it}
              what_is_it = {what_is_it}
              when_was_it_made = {when_was_it_made}
              onChange={this.updateProductState}
              onSave={this.saveProduct}
              onDelete={this.deleteProduct}
              product={this.state.product}
              errors={this.state.errors}/>
        );
    }
}

ManageProductPage.propTypes = {
  product: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//this makes react-router available on this component
ManageProductPage.contextTypes = {
  router: PropTypes.object
};

function getProductById(products, id){
  const product = products.filter(product => product.id == id);
  if (product) return product[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.params.id; //from the path '/product/:id
  let product = {id: '', title: '', price: 0.00, quantity: 0};

  if (productId && state.products.length > 0) {
    product = getProductById(state.products, productId)
  }
    return {
        product: product,
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProductPage);
