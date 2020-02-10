import React from "react";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";
import PostEditDialog from "../PostEditDialog";
import { postTypes } from "../../../Entities";

describe("PostEditDialog", () => {
  test("Snapshot matches", () => {
    const post: postTypes.IPost = {
      _id: "5bcc554259e0dbfda6ed1a55",
      userId: "5bcc554259e0dbfda6ed1a55",
      title: "string",
      body: "string",
    };

    const wrapper = shallow(
      <BrowserRouter>
        <PostEditDialog post={post} open={true} updatePost={jest.fn()} handleCloseDialog={jest.fn()} />
      </BrowserRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
