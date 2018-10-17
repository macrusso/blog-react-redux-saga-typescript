import React from 'react';
import { Item, Container } from 'semantic-ui-react';
import { IPost } from '../../Entities/Post';
import { IUser } from '../../Entities/User';
import { Link } from 'react-router-dom';
import { selectedPost } from '../../routes';

export interface IPostListItemProps {
  posts: IPost[];
  users: IUser[];
  loading: boolean;
  usersLoading: boolean;
}

const PostListItem = ({
  users,
  posts,
  loading,
  usersLoading,
}: IPostListItemProps) => (
  <Container>
    <Item.Group>
      {!loading &&
        !usersLoading &&
        posts.length > 0 &&
        posts.map(post => (
          <Item key={post.id}>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />
            <Item.Content>
              <Item.Header>
                <Link to={selectedPost.replace(':postId', post.id.toString())}>
                  {post.title}
                </Link>
              </Item.Header>
              <Item.Meta>by {users[post.userId].name}</Item.Meta>
              <Item.Description>{post.body}</Item.Description>
            </Item.Content>
          </Item>
        ))}
    </Item.Group>
  </Container>
);

export default PostListItem;
