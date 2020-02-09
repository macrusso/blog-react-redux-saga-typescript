import React from "react";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";
import CommentAdd from "../CommentAdd";

describe("CommentAdd", () => {
  test("Snapshot matches", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <CommentAdd
          userId={"5bcc034f84c005f985459b85"}
          addComment={jest.fn()}
          selectedPostId={"5bcc034f84c005f985459b85"}
        />
      </BrowserRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
