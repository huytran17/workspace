import { Box, Button, TextField, FormGroup } from "@mui/material";
import { FC } from "react";
import "./style.scss";

const BaseRegistrationForm: FC<{}> = () => {
  return (
    <div className="registration">
      <Box component="form" noValidate autoComplete="off">
        <FormGroup>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            required={true}
          />
          <TextField label="Username" variant="outlined" required={true} />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            required={true}
          />
        </FormGroup>

        <Button variant="contained" disableElevation>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default BaseRegistrationForm;
