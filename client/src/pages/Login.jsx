import { CameraAlt } from '@mui/icons-material';
import { Avatar, Box, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import { React, useState } from 'react';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  return (  
    <Container 
      component = { "main" } 
      maxWidth = "xs"
      sx = {{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Paper
        elevation = {3}
        sx = {{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant = "h5">Login</Typography>
            <form style={{
              width: "100%",
              marginTop: "1rem",
            }}>
              <TextField 
              required
              label = "Username"
              margin = "normal"
              variant = "outlined"
              fullWidth
              />

              <TextField 
              required
              fullWidth
              label = "Password"
              type = "Password"
              margin = "normal"
              variant = "outlined"
              />         

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  gap: "1rem", // Optional spacing between buttons
                  marginTop: "1rem",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Login
                </Button>

                <Button
                  variant="text"
                  onClick={toggleLogin}
                >
                  Register
                </Button>
              </Box>                        
            </form>
          </>
        ) : (
          <>
            <Typography variant = "h5">Sign Up</Typography>
            <form style={{
              width: "100%",
              marginTop: "1rem",
            }}>

              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar 
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                />

                <IconButton
                  sx = {{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    bgcolor:"rgba(0, 0, 0, 0)",
                    "hover": {
                      bgcolor: "rgba(0, 0, 0, 0.7)",
                    }
                  }}
                  component = "label"
                >
                  <>
                    <CameraAlt />
                    <VisuallyHiddenInput type="file"/>
                  </>
                </IconButton>
              </Stack>

              <TextField 
              required
              label = "First-Name"
              margin = "normal"
              variant = "outlined"
              fullWidth
              />

              <TextField 
              label = "Last-Name"
              margin = "normal"
              variant = "outlined"
              fullWidth
              />  

              <TextField 
              required
              label = "Username"
              margin = "normal"
              variant = "outlined"
              fullWidth
              />

              <TextField 
              required
              label = "Bio"
              margin = "normal"
              variant = "outlined"
              fullWidth
              />  

              <TextField 
              required
              fullWidth
              label = "Password"
              type = "Password"
              margin = "normal"
              variant = "outlined"
              />         

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  gap: "1rem", // Optional spacing between buttons
                  marginTop: "1rem",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={toggleLogin}
                >
                  Login Instead
                </Button>

                <Button
                  variant="text"
                >
                  Register
                </Button>
              </Box>                        
            </form>
          </>
        )}

      </Paper>
    </Container>
  )
}

export default Login
