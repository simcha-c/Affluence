import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, RootPathRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/sign_up_form_container';
import LogInFormContainer from './session_form/login_form_container';
import LoginPage from './home/home';
import TeamShow from './team_show';
import { closeDropdown } from '../actions/dropdown_actions';

const App = (props) => {
  const clickHandler = props.dropdownOpen ? props.closeDropdown : null;
  return (
    <div className="app" onClick={clickHandler}>

      <Switch>
        <AuthRoute exact path='/login' component={LoginPage} />
        <RootPathRoute exact path="/" />
        <ProtectedRoute path='/teams/:teamId' component={TeamShow} />
      </Switch>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dropdownOpen: state.ui.dropdown.open
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeDropdown: () => dispatch(closeDropdown()),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// export default App;
