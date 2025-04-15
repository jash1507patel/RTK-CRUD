import React, { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AuthContext } from "../context/AuthContext";

const adminuser = { email: "admin@gmail.com", password: "admin123" };

function Login() {

  const navigate = useNavigate()
  const { login, role } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (email === adminuser.email && password === adminuser.password) {
      login("admin" , email , password);
    } else {
      login("user" , email , password);
    }
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    if(role){
      navigate(role === "admin" ? "/admin" : "/user")
    }
  })

  return (
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "52ch" } }}
        noValidate
        autoComplete="off"
        >
        <h1>login</h1>
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
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={handleSubmit}>
            Log in
          </Button>
        </Stack>
      </Box>
  );
}

export default Login;
