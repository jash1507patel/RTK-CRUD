import { useNavigate } from "react-router";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AuthContext } from "../context/AuthContext";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const { role, logOut } = useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Do Anything.
          </Typography>
          {role === null ? (
            <>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/signup")}>
                Register
              </Button>
              <Button color="inherit" onClick={() => navigate("/login")}>
                Login
              </Button>
            </>
          ) : role === "user" ? (
            <>
              <Button color="inherit" onClick={() => navigate("/user")}>
                User Profile
              </Button>
              <Button
                color="error"
                variant="contained"
                onClick={() => {
                  logOut();
                  navigate("/login");
                }}
              >
                Logout
              </Button>
            </>
          ) : role === "admin" ? (
            <>
              <Button color="inherit" onClick={() => navigate("/admin")}>
                Admin Profile
              </Button>
              <Button color="inherit" onClick={() => navigate("/allusers")}>
                All Users
              </Button>
              <Button
                color="error"
                variant="contained"
                onClick={() => {
                  logOut();
                  navigate("/login");
                }}
              >
                Logout
              </Button>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
