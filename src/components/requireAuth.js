import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  const ComposedComponent = props => {
    useEffect(() => {
      shouldNavigateAway();
    });

    const shouldNavigateAway = () => {
      if (!props.auth) {
        props.history.push('/');
      }
    };

    return <ChildComponent {...props} />;
  };

  const mapStateToProps = ({ auth }) => ({ auth });

  return connect(mapStateToProps)(ComposedComponent);
};
