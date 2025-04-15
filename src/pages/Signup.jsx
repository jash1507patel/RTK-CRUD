import React, { useContext, useState } from "react";
import {useNavigate} from "react-router"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AuthContext } from "../context/AuthContext";

function Signup() {
  const navigate = useNavigate()
  const {signup} = useContext(AuthContext)
  const [signupUser,setSignupUser] = useState({
    name : "",
    age : "",
    email : "",
    address : "",
    password : "",
  })

  function handleSubmit(e){
    e.preventDefault();
    signup({...signupUser , id : Date.now() })
    setSignupUser({
      name : "",
      age : "",
      email : "",
      address : "",
      password : "",
    })
    navigate("/login")
  }

  return (
    <div>
      <h1>SignUP</h1>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="name" label="Name" variant="outlined" value={signupUser.name} onChange={(e) => setSignupUser({...signupUser,name : e.target.value})}/>
        <TextField id="age" label="Age" type="number" value={signupUser.age} onChange={(e) => setSignupUser({...signupUser,age : e.target.value})}/>
        <br />
        <TextField id="email" label="Email" variant="outlined" value={signupUser.email} onChange={(e) => setSignupUser({...signupUser,email : e.target.value})}/>
        <TextField id="address" label="Address" variant="outlined" value={signupUser.address} onChange={(e) => setSignupUser({...signupUser,address : e.target.value})}/>
        <br />
        <Box
          sx={{ "& > :not(style)": {  width: "52ch" } }}
        >
          <TextField id="password" label="Password" variant="outlined" value={signupUser.password} onChange={(e) => setSignupUser({...signupUser,password : e.target.value})}/>
        </Box>
        <br />
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Stack>
      </Box>
    </div>
  );
}

export default Signup;
