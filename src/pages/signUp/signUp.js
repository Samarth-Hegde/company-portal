import { Button, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fireBaseAuthentication } from "../../firebase/fireBaseHandler";
import { useNavigate } from "react-router-dom";
import "./signUp.css";

function SignUp(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  props.handleEmail(user.email);

  const handleClick = () => {
    createUserWithEmailAndPassword(
      fireBaseAuthentication,
      user.email,
      user.password
    )
      .then(() => {
        nav("/userDetails");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="signUp__container">
      <TextField
        name="email"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        className="signUp__input"
        sx={{ marginBottom: 2, width: 300 }}
        type="email"
        onChange={handleChange}
      />
      <TextField
        name="password"
        id="outlined-basic"
        label="Password"
        variant="outlined"
        className="signUp__input"
        sx={{ marginBottom: 2, width: 300 }}
        type="password"
        onChange={handleChange}
      />
      <Button
        variant="contained"
        className="signUp__input"
        sx={{ marginBottom: 2, width: 300 }}
        onClick={handleClick}
      >
        Sign Up
      </Button>
    </div>
  );
}

export default SignUp;
