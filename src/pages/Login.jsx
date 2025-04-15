import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";
import { Card, Typography } from "@mui/material";

const adminuser = { email: "admin@gmail.com", password: "admin123" };

function Login() {
  const navigate = useNavigate();
  const { login, role } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (email === adminuser.email && password === adminuser.password) {
      login("admin", email, password);
    } else {
      login("user", email, password);
    }
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    if (role) {
      navigate(role === "admin" ? "/admin" : "/user");
    }
  });

  return (
    <div className="mainContainer">
      <Card
        sx={{
          padding: "20px",
          boxShadow: "5px 5px 25px  gray",
          borderRadius: "15px",
        }}
      >
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "400px" } }}
          noValidate
          autoComplete="off"
        >
          <div className="heading">
          <Typography variant="h4" sx={{fontWeight:"700"}}>LogIn</Typography>
          </div>
          <TextField
            id="name"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Stack spacing={2} direction="row" sx={{alignItems:"center" , justifyContent : "center"}}>
            <Button variant="contained" onClick={handleSubmit}>
              Log in
            </Button>
          </Stack>
        </Box>
      </Card>
    </div>
  );
}

export default Login;
