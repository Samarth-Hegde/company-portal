import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp/signUp";
import UserDetails from "./pages/userDetails/userDetails";
import { useState } from "react";
import PostJob from "./pages/postJob/postJob";

function App() {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handleCompanyName = (companyName) => {
    setCompanyName(companyName);
    console.log(companyName);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<SignUp handleEmail={handleEmail} />}
        ></Route>
        <Route
          path="/userDetails"
          element={
            <UserDetails email={email} handleCompanyName={handleCompanyName} />
          }
        ></Route>
        <Route
          path="/postJob"
          element={<PostJob companyName={companyName} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
