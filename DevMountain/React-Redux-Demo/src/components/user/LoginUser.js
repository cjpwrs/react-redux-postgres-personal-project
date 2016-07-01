/**
 * Created by cjpowers on 6/30/16.
 */
import React, {PropTypes} from 'react';
import RegisterUserForm from './RegisterUserForm';
import LoginUserForm from './LoginUserForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';

class LoginUser extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, this.props.user),
      errors: {}
    };
    this.updateUserState = this.updateUserState.bind(this)
    this.sendUserLoginRequest = this.sendUserLoginRequest.bind(this);

  }

  updateUserState(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user})
  }

  sendUserLoginRequest(event){
    event.preventDefault();
    console.log(this.state.user);
    this.props.actions.loginUser(this.state.user);
    this.context.router.push('/');
  }



  render() {
    console.log('these are the props for my manage user page: ',this.props);
    return(
      <div>
        <h1>Manage Users Page</h1>
        <LoginUserForm
          onChange={this.updateUserState}
          onLogin={this.sendUserLoginRequest}
          user={this.state.user}/>
      </div>
    )
  }

}

LoginUser.propTypes = {
  user: PropTypes.object.isRequired
}

LoginUser.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);
