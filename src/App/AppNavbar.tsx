import React from "react";
import { Button, Typography, Toolbar, AppBar } from "@material-ui/core";
import { IUser } from "../Entities";

interface IAppNavbarProps {
  currentUser?: IUser;
  onLogoClick: () => void;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  onRegisterClick: () => void;
}

const AppNavbar: React.SFC<IAppNavbarProps> = props => {
  const { currentUser, onLogoClick, onLoginClick, onLogoutClick, onRegisterClick } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" onClick={() => onLogoClick()}>
          Simple React Blog
        </Typography>
        {(currentUser && currentUser.token) || localStorage.token ? (
          <Button color="inherit" onClick={() => onLogoutClick()}>
            Logout
          </Button>
        ) : (
          <>
            <Button color="inherit" onClick={() => onRegisterClick()}>
              Register
            </Button>
            <Button color="inherit" onClick={() => onLoginClick()}>
              Login
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppNavbar;
