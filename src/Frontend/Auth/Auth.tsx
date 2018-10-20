import React from 'react';
import { Formik } from 'formik';
import { IUser } from '../../Entities';
import {
  TextField,
  Button,
  DialogActions,
  DialogContent,
} from '@material-ui/core';

interface IAuthFormFormProps {
  user?: IUser;
  register: boolean;
}

const AuthFormForm: React.SFC<IAuthFormFormProps> = props => {
  const { user, register } = props;
  const initialValues = register
    ? { name: '', email: '', password: '' }
    : { ...user };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} autoComplete="off">
          <DialogContent>
            <TextField
              id="email"
              label="Email"
              name="email"
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
