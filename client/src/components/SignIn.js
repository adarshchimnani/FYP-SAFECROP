import React, { useState } from "react";
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Container, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import LockOutlinedIcon from '@mui/material';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
 
//const Joi = require("joi");


const axios = require('axios').default;

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {


  const navigate = useNavigate();
  //  const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  //   showPass: false,
  // });

  const [currentInput, finalInput] = useState({
    email: "",
    password: "",
  })

  const setdata = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    finalInput((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = currentInput;

    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

    // const res = await fetch("/",{
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     email, password
    //   })
    // }).then((result) => result.json())
    // .catch((error)=> console.log(error.message));

    // const data = await res.json();
    // console.log(data);

    // if (res.status === 422 || !data) {
    //   alert("error");
    //   console.log("Error ");
    // } else {
    //   alert(" data added")
    //   console.log("data addedd")
    //   navigate("/dashboard")
    // }


    // axios.post("https://reqres.in/api/login", {
    //   email: data.get('email'),
    //   password: data.get('password')
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));

    //   navigate("/dashboard");


    // try {
    //   const url = "/api/user/signin";
    //   const { data: res } = await axios.post(url, currentInput);

  

    // } catch (error) {
    //   if (
    //     error.response &&
    //     error.response.status >= 400 &&
    //     error.response.status <= 500
    //   ) {
    //     console.log(error);
    //   }
    // }

    axios.post('http://localhost:8003/api/user/signin', {
      email: email,
      password: password
    }).then(function (response) {     
        localStorage.setItem("token", response.data.token);
        console.log(response);
        let result = response.data;
       // <Navigate to={result.redirect} replace/>
         navigate("/dashboard")
      })
      .catch(function (error) {
        console.log(error);
      });


  };



  return (
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon/> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" to="/dashboard" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={setdata}
              value={currentInput.email}
              autoComplete="email"
              autoFocus
            // onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              onChange={setdata}
              value={currentInput.password}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            // onChange={(e) => setValues({ ...values, password: e.target.value })}
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
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}