import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { useContext, useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'



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

export default function SignUp() {

  const navigate = useNavigate();

  const [currentInput, finalInput] = useState({
    firstName: "",
    lastName: "",
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

    const { firstName, lastName, email, password } = currentInput;

    // //1.Getting user data    
    //   const input = new FormData(event.currentTarget);

    //   const email = input.get('email');
    //   const password = input.get('password');
    //   const firstName = input.get("firstName");
    //   const lastName = input.get("lastName");
    // //1

    //2. Fetching user data and posting it to db.
    // const res = await fetch("/signup",{
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     firstName, lastName, email, password
    //   })
    // }).then((result) => {
    //   console.log(result);
    // if(result.status === 1){
    //   console.log(result.data);
    //   navigate(result.redirect)
    //   }
    // }).catch((error)=> console.log(error.message));
    // .then((result) => result.json())
    axios.post('http://localhost:8003/api/user/signup', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    })
      .then(function (response) {
        console.log(response.data);
        let result = response.data;
        navigate(result.redirect)
      })
      .catch(function (error) {
        console.log(error);
      });


    // const data = await res.json();


    // if (res.status === 422 || !data) {
    //   alert("error");
    //   console.log("Error ");
    // } else {
    //   alert(" data added")
    //   console.log("data addedd")
    //   // navigate("/")
    //   res.json({
    //     status: 1,
    //     message : "User Added"
    //   })
    // }
    //2

    // axios.post("https://reqres.in/api/register", {
    //   email: data.get('email'),
    //   password: data.get('password')
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            SafeCrop
          </Typography>
        </Toolbar>
      </AppBar>
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
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  onChange={setdata}
                  value={currentInput.firstName}
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={setdata}
                  value={currentInput.lastName}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={setdata}
                  value={currentInput.email}
                  id="email"
                  label="Email Address"
                  type="email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={setdata}
                  value={currentInput.password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}