/**
 * Created by cjpowers on 6/30/16.
 */
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const LoginUserForm = ({ user, className, onDelete, onLogin, onChange, loading, errors}) => {
  return (
    <div>
      <form>
        <h3>Login</h3>

        <h4>Username<span className="asterisk">*</span></h4>
        <TextInput
          type="text"
          name="username"
          label="username"
          value={user.username}
          onChange={onChange}
          error=""/>

        <h4>Password<span className="asterisk">*</span></h4>
        <TextInput
          type="password"
          name="password"
          label="Password"
          value={user.password}
          onChange={onChange}
          error=""/>
        

        <input
          type="submit"
          disabled={loading}
          value={loading ? 'Logging In...' : 'Login' }
          className="btn btn-primary"
          onClick={onLogin}/>

      </form>
    </div>
  );
};

LoginUserForm.propTypes = {
  //user: React.PropTypes.object.isRequired,
  onLogin: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default LoginUserForm;
