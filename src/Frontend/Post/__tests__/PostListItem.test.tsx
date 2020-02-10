import React from "react";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";
import PostListItem from "../PostListItem";
import { postTypes, userTypes, commentTypes } from "../../../Entities";

describe("PostListItem", () => {
  test("Snapshot matches", () => {
    const posts: postTypes.IPost[] = [
      {
        _id: "5bcc554259e0dbfda6ed1a55",
        userId: "5bcc554259e0dbfda6ed1a55",
        title: "string",
        body: "string",
      },
    ];

    const users: { [key: string]: userTypes.IUser } = {
      "5bcc554259e0dbfda6ed1a55": {
        name: "string",
        email: "string",
        _id: "5bcc554259e0dbfda6ed1a55",
      },
    };

    const comments: commentTypes.IComment[] = [
      {
        body: "string",
        _id: "5bcc554259e0dbfda6ed1a55",
        postId: "5bcc554259e0dbfda6ed1a55",
        userId: "5bcc554259e0dbfda6ed1a55",
      },
    ];
    const wrapper = shallow(
      <BrowserRouter>
        <PostListItem
          posts={posts}
          users={users}
          comments={comments}
          loading={false}
          usersLoading={false}
          onAddCommentClick={jest.fn()}
        />
      </BrowserRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
