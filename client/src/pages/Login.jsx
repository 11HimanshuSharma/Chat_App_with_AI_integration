import React from 'react'
import {IconButton, Stack, Container, Typography, Paper, TextField, Button, Avatar } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Component } from 'react';
import {useInputValidation, useStrongPassword} from '6pp'
import { usernameValidator } from '../utils/validatos';

function Login() {
  const [isLogin, setIsLogin] = React.useState(true);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  }

  const name = useInputValidation("");
  const email = useInputValidation("");
  const password = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("");




  return (
    <Container component={"main"} maxWidth = "xs" sx = {{
      height: "100vh",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'

    }} >
      <Paper elevation = {3} sx = {{padding: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {
            isLogin ? <>
            <Typography variant= "h5"> Login </Typography>
            <form>
                <TextField required value={username.value} onChange={username.changeHandler} fullWidth label = "Username" margin = "normal" variant = "outlined"/>
                {
                  username.error && (
                    <Typography color= "error" variant= "caption">
                      {username.error}
                    </Typography>
                  )
                }
                <TextField value={password.value} onChange={password.changeHandler} type= "password" required fullWidth label = "Password" margin = "normal" variant = "outlined"/>

                <Button variant = "contained" color = "primary" fullWidth sx = {{marginTop: 2}}> Login </Button>
                <Typography textAlign={"center"} mt = {"2rem"}> Or </Typography>
                <Button sx = {{marginTop: "1rem"}} variant = "text" onClick = {toggleLogin}> Create an account </Button>


            </form>
            </> : <>
            <Typography variant= "h5"> Signup </Typography>
            <form style={{
              width: "100%",
              marginTop: "1rem"
            }}>
                <Stack position = "relative" width = {"10rem"} margin  = {"auto"}>
                  <Avatar sx = {{width: "10rem", height: "10rem", margin: "auto", objectFit: "cover"}} />
                  <IconButton sx = {{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    backgroundColor: "white",
                    ":hover": {backgroundColor: "teal"
                    }
                  }} component = "label">
                    <>
                    <CameraAltIcon/>
                    <visuallyHiddenInput type = "file" accept = "image/*" />
                    </>
                  </IconButton>
                </Stack>
                <TextField value={name.value} onChange={name.changeHandler} required fullWidth label = "Name" margin = "normal" variant = "outlined"/>
               
                <TextField value={bio.value} onChange={bio.changeHandler} required fullWidth label = "Bio" margin = "normal" variant = "outlined"/>
                <TextField value={email.value} onChange={email.changeHandler} required fullWidth label = "Email/username" margin = "normal" variant = "outlined"/>
                <TextField value={password.value} onChange={password.changeHandler} type= "password" required fullWidth label = "Password" margin = "normal" variant = "outlined"/>

                <Button variant = "contained" color = "primary" fullWidth sx = {{marginTop: 2}}> Login </Button>
                <Typography textAlign={"center"} mt = {"2rem"}> Or </Typography>
                <Button sx = {{marginTop: "1rem"}} variant = "text" onClick = {toggleLogin}> Create an account </Button>
            </form>
            </>

        }

      </Paper>
    </Container>
  )
}

export default Login