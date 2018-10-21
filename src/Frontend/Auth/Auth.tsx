import React from 'react';
import { Formik } from 'formik';
import {
  TextField,
  Button,
  DialogActions,
  DialogContent,
  Typography,
} from '@material-ui/core';
import { IUserAuth } from '../../Entities';

interface IAuthFormFormProps {
  error?: string;
  register: boolean;
  loginUser: (user: IUserAuth) => void;
  registerUser: (user: IUserAuth) => void;
}

const AuthFormForm: React.SFC<IAuthFormFormProps> = props => {
  const { error, register, loginUser, registerUser } = props;
  const initialValues: IUserAuth = {
    name: '',
    email: '',
    password: '',
    profileImageUrl: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        register ? registerUser(values) : loginUser(values);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          style={{ width: '500px' }}
        >
          <DialogContent>
            {error && (
              <Typography
                variant="body2"
                color="error"
                gutterBottom={true}
                align="center"
              >
                {error}
              </Typography>
            )}
            <TextField
              id="email"
              label="Email"
              name="email"
              required={true}
              fullWidth={true}
              margin="normal"
              variant="outlined"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="password"
              label="Password"
              name="password"
              required={true}
              fullWidth={true}
              margin="normal"
              variant="outlined"
              type="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {register && (
              <TextField
                id="name"
                label="Name"
                name="name"
                required={true}
                fullWidth={true}
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
            {register && (
              <TextField
                id="profileImageUrl"
                label="Profile Image URL"
                name="profileImageUrl"
                fullWidth={true}
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                value={values.profileImageUrl}
                onBlur={handleBlur}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button type="submit" color="primary" variant="contained">
              {register ? 'Register' : 'Login'}
            </Button>
          </DialogActions>
        </form>
      )}
    </Formik>
  );
};

export default AuthFormForm;
