import { Button, TextField, Typography } from "@mui/material";
import "./userDetails.css";
import React, { useState, useEffect } from "react";
import {
  fireBaseDataBase,
  fireBaseAuthentication,
} from "../../firebase/fireBaseHandler";
import { ref, set } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function UserDetails(props) {
  const [uid, setUid] = useState();
  const [userDetails, setUSerDetails] = useState({
    email: props.email,
    companyName: "",
    HRName: "",
    location: "",
  });
  const nav = useNavigate();

  useEffect(() => {
    onAuthStateChanged(fireBaseAuthentication, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
      }
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUSerDetails({ ...userDetails, [name]: value });
  };

  props.handleCompanyName(userDetails.companyName);

  const handleClick = async () => {
    const dataBaseRef = ref(
      fireBaseDataBase,
      `jobPortal/companies/companyDetails/${uid}`
    );
    await set(dataBaseRef, userDetails);
    nav("/postJob");
  };
  return (
    <div className="userDetails__container">
      <Typography sx={{ marginBottom: 2 }}>
        Please Fill All The Details To Continue
      </Typography>
      <TextField
        id="outlined-basic"
        label="Company Name"
        variant="outlined"
        sx={{ marginBottom: 2, width: 300 }}
        name="companyName"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="HR Name"
        variant="outlined"
        sx={{ marginBottom: 2, width: 300 }}
        name="HRName"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Location"
        variant="outlined"
        sx={{ marginBottom: 2, width: 300 }}
        name="location"
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleClick}>
        Submit
      </Button>
    </div>
  );
}

export default UserDetails;
