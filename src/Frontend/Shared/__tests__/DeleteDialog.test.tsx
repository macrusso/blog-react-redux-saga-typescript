import React from "react";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";
import DeleteDialog from "../DeleteDialog";

describe("DeleteDialog", () => {
  test("Snapshot matches", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <DeleteDialog object={{}} open={true} deleteFn={jest.fn()} handleCloseDialog={jest.fn()} />
      </BrowserRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
