import { Avatar, Box, Button, Checkbox, Container, createTheme, CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { signIn } from '../../Redux/auth/action';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import "./Login.css"



const Login = () => {


  const dispatch = useDispatch();

  const location = useLocation()

  const navigate = useNavigate()


  const authStatus = useSelector(store => store.authReducer.auth);

  const [userEmail, setUserEmail] = useState("eve.holt@reqres.in"); // for testing perpose otherwise it should be empty string

  const [userPassword, setUserPassword] = useState("cityslicka"); // for testing perpose otherwise it should be empty string



  const handleUserEmailChange = (e) => {

    setUserEmail(e.target.value);

  }


  const handleUserPassword = (e) => {

    setUserPassword(e.target.value);

  }



  const submitHandler = (e) => {

    e.preventDefault();

    console.log("User Email ", userEmail, "Password", userPassword);

    dispatch(signIn({ email: userEmail, password: userPassword } , navigate ));



  };


  useEffect(() => {

    if (location?.state?.pathname && authStatus) {

      navigate(location.state?.pathname, { replace: true })
    }


  }, [location?.state, navigate, authStatus])



  console.log(location)






  const theme = createTheme();



  return (

    <div className='loginBox'>


      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar   style={{backgroundColor:"teal"}}  sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={userEmail}

                onChange={handleUserEmailChange}


              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"

                value={userPassword}

                onChange={handleUserPassword}

              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               style={{backgroundColor:"teal"}}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link  style={{Color:"teal"}}   href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link style={{Color:"teal"}}  href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>

        </Container>
      </ThemeProvider>


    </div>


  )
}

export default Login