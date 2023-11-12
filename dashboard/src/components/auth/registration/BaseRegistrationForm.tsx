import { Box, Button, TextField, FormGroup } from "@mui/material";
import { FC } from "react";
import "./style.scss";

const BaseRegistrationForm: FC<{}> = () => {
  return (
    <div className="registration">
      <Box component="form" noValidate autoComplete="off">
        <FormGroup>
          <TextField label="Email" variant="outlined" type="email" required />
          <TextField label="Username" variant="outlined" required />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            required
          />
          <TextField
            label="Password Confirmation"
            variant="outlined"
            type="password"
            required
          />
        </FormGroup>

        <FormGroup>
          <Button variant="contained" disableElevation>
            Submit
          </Button>
        </FormGroup>
      </Box>
    </div>
  );
};

export default BaseRegistrationForm;
