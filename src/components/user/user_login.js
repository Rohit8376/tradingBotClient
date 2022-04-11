import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(event.target.password.value);
  };

  return (
    <Grid
      container
      spacing={2}
      margin="10px auto"
      mt="70px"
      sx={{ opacity: [0.9, 0.8, 0.7] }}
    >
      <Grid
        item
        xl={6}
        md={6}
        sm={11}
        xs={11}
        margin="auto"
        sx={{ mt: 1, borderLeft: "3px solid black", paddingLeft: "10px" }}
      >
        <Box
          component="form"
          onSubmit={onSubmitHandler}
          noValidate
          sx={{
            boxShadow: "10px 10px 5px grey",
            padding: "10px 10px 5px",
          }}
        >
          <Typography variant="p" fontSize="20px" fontWeight="bold">
            SIGN IN TO TRADING BOTS
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="client_id"
            label="Client Id"
            name="Client Id"
            size="small"
            autoComplete="client_id"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            size="small"
            id="password"
            autoComplete="password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        <Grid item margin="auto">
          <Link className="none" to="/signup">
            <Button>Registered now</Button>
          </Link>
          |
          <Link to="/forget" className="none">
            <Button>Forgotten?</Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Login;
