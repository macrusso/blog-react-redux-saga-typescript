import React from "react";
import { Button, Typography, Toolbar, AppBar } from "@material-ui/core";
import AppNavbar from "../AppNavbar";
import { shallow } from "enzyme";
import { IUser } from "../../Entities";
import { BrowserRouter } from "react-router-dom";

describe("AppNavbar", () => {
  test("Snapshot matches", () => {
    const user: IUser = {
      name: "string",
      email: "string",
      _id: "5bcc554259e0dbfda6ed1a55",
    };

    const wrapper = shallow(
      <BrowserRouter>
        <AppNavbar
          currentUser={user}
          onLogoClick={jest.fn()}
          onLoginClick={jest.fn()}
          onLogoutClick={jest.fn()}
          onRegisterClick={jest.fn()}
        />
      </BrowserRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
