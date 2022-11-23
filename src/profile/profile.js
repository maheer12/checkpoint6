import React from "react";
import PropTypes from "prop-types"

function Profile(props) {
  return (
    <div className="text-centre">
      <h1> {props.BIO || "none"} </h1>
      <h1>{props.fullName || "none"}</h1>
      <h1> {props.profession || "none"} </h1>
      {props.children}
      <button onClick={props.handleClick}>Clickme</button>
    </div>
  );
}
Profile.propTypes = {
  BIO:PropTypes.string ,
  fullName:PropTypes.string,
  profession:PropTypes.string,

}
export default Profile;
