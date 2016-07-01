/**
 * Created by cjpowers on 6/25/16.
 */
import React, {PropTypes} from 'react';
import Header from './common/Header';
import SubHeader from './common/SubHeader';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends React.Component {

  render() {
    console.log('these are the props from app.js', this.props);
    return (
      <div>
        <Header
          user = {this.props.user.user}
          userLoggedIn = {this.props.user.isUserLoggedIn}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}



export default connect(mapStateToProps)(App);
