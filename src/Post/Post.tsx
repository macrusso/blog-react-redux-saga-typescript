import React from 'react';
import { Item } from 'semantic-ui-react';
import { IPost } from '.';
import { IUser } from '../User';

export interface IPostProps {
  posts: IPost[];
  users: IUser[];
  loading: boolean;
}

const Post = ({
  users,
  posts,
  loading,
}: IPostProps) => (
    <Item.Group>
      {!loading && posts.length > 0 &&
        posts.map(post => (

          <Item key={post.id}>
            <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

            <Item.Content>
              <Item.Header>{post.title}</Item.Header>
              <Item.Meta>by joe doe</Item.Meta>
              <Item.Description>
                {post.body}
              </Item.Description>
            </Item.Content>
          </Item>
        ))}
    </Item.Group>
  );

export default Post;