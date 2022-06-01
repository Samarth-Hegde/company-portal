import React, { useState, useEffect } from "react";
import { Button, TextField, Typography } from "@mui/material";
import "./postJob.css";
import {
  fireBaseDataBase,
  fireBaseAuthentication,
} from "../../firebase/fireBaseHandler";
import { push, ref } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

function PostJob(props) {
  console.log(props);
  const [data, setData] = useState({
    companyName: props.companyName,
  });
  const [uid, setUid] = useState();

  const handleClick = async () => {
    const companyRef = ref(
      fireBaseDataBase,
      `jobPortal/companies/companyDetails/${uid}/posts`
    );
    if (Object.values(data).length < 8) {
      alert("All fields are required");
    } else {
      alert("Successfully uploaded");
      await push(companyRef, data);
      const jobPostRef = ref(fireBaseDataBase, `jobPortal/allPosts`);
      await push(jobPostRef, data);
    }
  };
  useEffect(() => {
    onAuthStateChanged(fireBaseAuthentication, (user) => {
      if (user) {
        setUid(user.uid);
      }
    });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="postJob__container">
      <Typography sx={{ marginBottom: 2 }}>
        Please Fill All The Details To Continue
      </Typography>
      <TextField
        id="outlined-basic"
        label="Post"
        variant="outlined"
        sx={{ marginBottom: 2, width: 500 }}
        name="post"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Package (LPA)"
        variant="outlined"
        sx={{ marginBottom: 2, width: 500 }}
        name="package"
        type="number"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Location"
        variant="outlined"
        sx={{ marginBottom: 2, width: 500 }}
        name="location"
        type="number"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="10th Cutoff"
        variant="outlined"
        sx={{ marginBottom: 2, width: 500 }}
        name="cutoff10th"
        type="number"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="12th Cutoff"
        variant="outlined"
        sx={{ marginBottom: 2, width: 500 }}
        name="cutoff12th"
        type="number"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Sem Cutoff"
        variant="outlined"
        sx={{ marginBottom: 2, width: 500 }}
        name="cutoffSem"
        type="number"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Current CGPA Cutoff"
        variant="outlined"
        sx={{ marginBottom: 2, width: 500 }}
        name="currentCgpaCutoff"
        type="number"
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleClick}>
        Post
      </Button>
    </div>
  );
}

export default PostJob;
