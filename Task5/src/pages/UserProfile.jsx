import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Profile of {username}</h2>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default UserProfile;
