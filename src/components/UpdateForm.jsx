import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AuthContext } from "../context/AuthContext";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "../services/UserData";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({ setUpdateOpen }) {
  const { user } = useContext(AuthContext);
  const { data } = useGetSingleUserQuery(user?.id);
  const [updateUser] = useUpdateUserMutation();
  const [updateUserData, setUpdateUserData] = useState({
    name: "",
    age: "",
    email: "",
    address: "",
    password: "",
  });
  console.log(data);

  const handleClose = () => {
    setUpdateOpen(false);
  };

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      await updateUser({ ...updateUserData, id: data.id });
      localStorage.setItem("currentUser", JSON.stringify(updateUserData));
      setUpdateUserData({
        name: "",
        age: "",
        email: "",
        address: "",
        password: "",
      });
      handleClose();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (data) {
      setUpdateUserData({
        name: data.name,
        age: data.age,
        email: data.email,
        address: data.address,
        password: data.password,
      });
    }
  }, [data]);

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Update Details
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              value={updateUserData.name}
              onChange={(e) =>
                setUpdateUserData({ ...updateUserData, name: e.target.value })
              }
            />
            <TextField
              id="age"
              label="Age"
              type="number"
              value={updateUserData.age}
              onChange={(e) =>
                setUpdateUserData({ ...updateUserData, age: e.target.value })
              }
            />
            <br />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={updateUserData.email}
              onChange={(e) =>
                setUpdateUserData({ ...updateUserData, email: e.target.value })
              }
            />
            <TextField
              id="address"
              label="Address"
              variant="outlined"
              value={updateUserData.address}
              onChange={(e) =>
                setUpdateUserData({
                  ...updateUserData,
                  address: e.target.value,
                })
              }
            />
            <br />
            <Box sx={{ "& > :not(style)": { width: "52ch" } }}>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                value={updateUserData.password}
                onChange={(e) =>
                  setUpdateUserData({
                    ...updateUserData,
                    password: e.target.value,
                  })
                }
              />
            </Box>
            <br />
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={handleUpdate}>
                Update
              </Button>
            </Stack>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
