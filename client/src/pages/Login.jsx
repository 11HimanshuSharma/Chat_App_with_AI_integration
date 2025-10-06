import React from 'react'
import { Container, Typography } from '@mui/material'

function Login() {
  const [isLogin, setIsLogin] = React.useState(true);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  }
  return (
    <Container>
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
                <Typography> Or </Typography>
                <Button sx = {{marginTop: "1rem"}} variant = "text" onClick = {toggleLogin}> Create an account </Button>


            </form>
            </> : <Typography variant= "h5"> Signup </Typography>
        }

      </Paper>
    </Container>
  )
}

export default Login