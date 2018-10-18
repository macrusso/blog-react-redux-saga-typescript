import React from 'react';
import { IComment } from 'src/Entities';

interface ICommentProps {
  comment?: IComment;
}

const Comment: React.SFC<ICommentProps> = props => {
  const { comment } = props;
  return (
    <div>
      <p>{comment && comment.body}</p>
    </div>
  );
};

export default Comment;
