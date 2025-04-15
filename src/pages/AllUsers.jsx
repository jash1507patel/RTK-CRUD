import React from "react";
import { useNavigate } from "react-router";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteUserMutation, useGetUserQuery } from "../services/UserData";

function AllUsers() {
  const navigate = useNavigate()
  const { data } = useGetUserQuery();
  const [deleteUser] = useDeleteUserMutation();

  async function handleDelete(id) {
    try{
      const con = confirm("are you sure to delete this data?")
      if(con){
        await deleteUser({ id })
    
          const cureentUser = JSON.parse(localStorage.getItem("currentUser"));
          if (cureentUser && cureentUser.id === id) {
            localStorage.removeItem("currentUser");
            localStorage.removeItem("currentUSerRole");
            navigate("/login")
          }
      }
    }
    catch (err) {
      console.error("Error deleting user:", err);
    }
  }

  return (
    <div>
      <h1>All Users</h1>
      {data ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>
                    <DeleteIcon onClick={() => handleDelete(user.id)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h3>Users not Found</h3>
      )}

    </div>
  );
}

export default AllUsers;
