import React from 'react';
import { connect } from 'react-redux';

const CommentList = props => {
  const renderComments = () => {
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

  return (
    <div>
      <h4>Comment List</h4>
      {renderComments()}
    </div>
  );
};

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps)(CommentList);
