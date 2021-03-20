import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRouter = ({ children, ...rest }) => {
  const [loggenInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
        loggenInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRouter;