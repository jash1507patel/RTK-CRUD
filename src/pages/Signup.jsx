import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AuthContext } from "../context/AuthContext";
import { Card, Typography } from "@mui/material";
import "./Signup.css"

function Signup() {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);
  const [signupUser, setSignupUser] = useState({
    name: "",
    age: "",
    email: "",
    address: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    signup({ ...signupUser, id: Date.now() });
    setSignupUser({
      name: "",
      age: "",
      email: "",
      address: "",
      password: "",
    });
    navigate("/login");
  }

  return (
    <div className="mainContainer">
      <Card
        sx={{
          padding: "20px",
          boxShadow: "5px 5px 25px  gray",
          borderRadius: "15px",
        }}
      >
          <div className="heading">
            <Typography variant="h4" sx={{ fontWeight: "700" }}>
              SignUP
            </Typography>
          </div>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "200px" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            value={signupUser.name}
            onChange={(e) =>
              setSignupUser({ ...signupUser, name: e.target.value })
            }
            sx={{}}
          />
          <TextField
            id="age"
            label="Age"
            type="number"
            value={signupUser.age}
            onChange={(e) =>
              setSignupUser({ ...signupUser, age: e.target.value })
            }
          />
          <br />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={signupUser.email}
            onChange={(e) =>
              setSignupUser({ ...signupUser, email: e.target.value })
            }
          />
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            value={signupUser.address}
            onChange={(e) =>
              setSignupUser({ ...signupUser, address: e.target.value })
            }
          />
          <br />
          <Box sx={{ "& > :not(style)": { width: "415px" } }}>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              value={signupUser.password}
              onChange={(e) =>
                setSignupUser({ ...signupUser, password: e.target.value })
              }
            />
          </Box>
          <br />
        </Box>
          <Stack
            spacing={2}
            direction="row"
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
      </Card>
    </div>
  );
}

export default Signup;
