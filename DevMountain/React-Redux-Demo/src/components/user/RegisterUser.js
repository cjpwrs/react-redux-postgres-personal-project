/**
 * Created by cjpowers on 6/30/16.
 */
import React, {PropTypes} from 'react';
import RegisterUserForm from './RegisterUserForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';

class RegisterUser extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {},
      errors: {}
    };
    this.updateUserState = this.updateUserState.bind(this)
    this.sendRegisterUserRequest = this.sendRegisterUserRequest.bind(this);

  }

  updateUserState(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user})
  }

  sendRegisterUserRequest(event){
    event.preventDefault();
    console.log(this.state.user);
    this.props.actions.registerUser(this.state.user);
    this.context.router.push('/user/signin');
  }



  render() {
    console.log('these are the props for my manage user page: ',this.props);
    return(
      <div>
        <h1>Manage Users Page</h1>
        <RegisterUserForm
          onChange={this.updateUserState}
          onSave={this.sendRegisterUserRequest}
          user={this.state.user}/>
      </div>
    )
  }

}

RegisterUser.propTypes = {
  user: PropTypes.object.isRequired
}

RegisterUser.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps){
  return{
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
