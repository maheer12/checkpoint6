import React, { component } from "react";
import "./App.css";
import Profile from "./profile/profile";
import image from "./image/maher.jpg";

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    alert("maher cherbib");
  };

  return (
    <div>
      <Profile
        BIO="bio"
        fullName="maher"
        profession="sales agent"
        handleClick={handleClick}
      >
        <img src={image}></img>
      </Profile>

      {/*data BIO,fullName,profession*/}
    </div>
  );
}

export default App;
