import React from "react";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";
import CommentListItem from "../CommentListItem";
import { IUser, IComment } from "../../../Entities";

describe("CommentListItem", () => {
  test("Snapshot matches", () => {
    const users: { [key: string]: IUser } = {
      "5bcc554259e0dbfda6ed1a55": {
        name: "string",
        email: "string",
        _id: "5bcc554259e0dbfda6ed1a55",
      },
    };
    const comments: IComment[] = [
      {
        body: "string",
        _id: "5bcc554259e0dbfda6ed1a55",
        postId: "5bcc554259e0dbfda6ed1a55",
        userId: "5bcc554259e0dbfda6ed1a55",
      },
    ];
    const wrapper = shallow(
      <BrowserRouter>
        <CommentListItem
          users={users}
          loading={false}
          comments={comments}
          usersLoading={false}
          currentUser={users[1]}
          handleOpenEditDialog={jest.fn()}
          handleOpenDeleteDialog={jest.fn()}
        />
      </BrowserRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
