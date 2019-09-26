import React from "react";
import "./style.css";

function MatchCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.username} src={props.imageurl} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Username:</strong> {props.username}
          </li>
          <li>
            <strong>Gender:</strong> {props.gender}
          </li>
          <li>
            <strong>Looking For:</strong> {props.lookingFor}
          </li>
        </ul>
      </div>
      <span onClick={() => props.deleteProfile(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default MatchCard;
