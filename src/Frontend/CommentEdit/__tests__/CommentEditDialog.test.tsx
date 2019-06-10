import React from "react";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";
import CommentEditDialog from "../CommentEditDialog";
import { IComment } from "src/Entities";

describe("CommentEditDialog", () => {
  test("Snapshot matches", () => {
    const comment: IComment = {
      _id: "5bcc554259e0dbfda6ed1a55",
      userId: "5bcc554259e0dbfda6ed1a55",
      postId: "5bcc554259e0dbfda6ed1a55",
      body: "string",
    };

    const wrapper = shallow(
      <BrowserRouter>
        <CommentEditDialog comment={comment} open={true} updateComment={jest.fn()} handleCloseDialog={jest.fn()} />
      </BrowserRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
