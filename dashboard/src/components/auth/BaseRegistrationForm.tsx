import { useRootDispatch, useRootSelector } from "@/hooks/redux";
import { authActions } from "@/store/auth/slice";
import { Box, Button, TextField } from "@mui/material";
import { FC } from "react";

const BaseRegistrationForm: FC<{}> = () => {
  const authState = useRootSelector((state) => state.auth);
  const dispatch = useRootDispatch();

  return (
    <div className="registration">
      {authState.hasUser ? <h1>Authorized</h1> : <h1>Unauthorized</h1>}

      <button
        onClick={() => dispatch(authActions.SET_HAS_USER(!authState.hasUser))}
      >
        Change state
      </button>

      <Box component="form" noValidate autoComplete="off">
        <TextField label="Email" variant="outlined" type="email" />
        <TextField label="Username" variant="outlined" />
        <TextField label="Password" variant="outlined" type="password" />

        <Button variant="contained" disableElevation>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default BaseRegistrationForm;
