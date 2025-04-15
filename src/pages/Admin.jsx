import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import UpdateForm from "../components/UpdateForm";
import { useGetSingleUserQuery } from "../services/UserData";
import "./Admin.css"
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

function Admin() {
  const { user } = useContext(AuthContext);
  const { data } = useGetSingleUserQuery(user?.id);
  // const data = JSON.parse(localStorage.getItem("currentUser"))
  const [updateOpen, setUpdateOpen] = useState(false);

  function handleClick() {
    setUpdateOpen(true);
  }

  return (
    <div className="userInfoContainer">
    <Card
            sx={{
              padding: "20px",
              boxShadow: "5px 5px 25px  gray",
              borderRadius: "15px",
            }}
          >
            <div className="heading">
              <Avatar>{data?.name[0]}</Avatar>
              {data?.name}
            </div>
            {data ? (
              <CardContent>
                {/* <Typography variant="h5">name : {data?.name}</Typography> */}
                <Typography variant="h5">age : {data?.age}</Typography>
                <Typography variant="h5">email : {data?.email}</Typography>
                <Typography variant="h5">address : {data?.address}</Typography>
                <Typography variant="h5">password : {data?.password}</Typography>
              </CardContent>
            ) : null}
            <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
              <Button variant="contained" onClick={handleClick} fullWidth>
                Edit
              </Button>
            </CardActions>
            &nbsp; &nbsp;
            {updateOpen === true && <UpdateForm setUpdateOpen={setUpdateOpen} />}
          </Card>
    </div>
  );
}

export default Admin;
