import React from 'react';
import { connect } from 'react-redux';

const CommentList = props => {
  if (!props.comments.length) {
    return <div>No comments</div>;
  }
  return (
    <ul>
      {props.comments.map(comment => (
        <li key={comment}>{comment}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps)(CommentList);
