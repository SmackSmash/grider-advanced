import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from 'actions';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

const App = props => {
  const renderButton = () => {
    return (
      <button onClick={() => props.changeAuth(!props.auth)}>
        {props.auth ? 'Sign Out' : 'Sign In'}
      </button>
    );
  };

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/post" exact>
            Post a Comment
          </NavLink>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  };

  return (
    <div>
      {renderHeader()}
      <Route path="/" exact component={CommentList} />
      <Route path="/post" exact component={CommentBox} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
  mapStateToProps,
  { changeAuth }
)(App);
