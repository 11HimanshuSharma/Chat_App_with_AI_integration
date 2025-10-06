import React from 'react'
import {IconButton, Stack, Container, Typography, Paper, TextField, Button, Avatar } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { visuallyHidden } from '@mui/utils';
function Login() {
  const [isLogin, setIsLogin] = React.useState(true);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  }
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
                <TextField required fullWidth label = "Email/username" margin = "normal" variant = "outlined"/>
                <TextField type= "password" required fullWidth label = "Password" margin = "normal" variant = "outlined"/>

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
                  }}>
                    <>
                    <CameraAltIcon/>
                    <visuallyHiddenInput type = "file" accept = "image/*" />
                    </>
                  </IconButton>
                </Stack>
                <TextField required fullWidth label = "Name" margin = "normal" variant = "outlined"/>
                <TextField required fullWidth label = "Bio" margin = "normal" variant = "outlined"/>
                <TextField required fullWidth label = "Email/username" margin = "normal" variant = "outlined"/>
                <TextField type= "password" required fullWidth label = "Password" margin = "normal" variant = "outlined"/>

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