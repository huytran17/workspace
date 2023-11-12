import { Box, Button, TextField, FormGroup } from "@mui/material";
import { FC } from "react";

const BaseRegistrationForm: FC<{}> = () => {
  return (
    <div className="registration">
      <Box component="form" noValidate autoComplete="off">
        <FormGroup>
          <TextField label="Email" variant="outlined" type="email" />
          <TextField label="Username" variant="outlined" />
          <TextField label="Password" variant="outlined" type="password" />
        </FormGroup>

        <Button variant="contained" disableElevation>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default BaseRegistrationForm;
