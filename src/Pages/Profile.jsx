import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT token saved at login
      },
    })
    .then((res) => setUser(res.data))
    .catch((err) => console.error("Profile fetch error:", err));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <img src={user.photoURL} alt="Profile" />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone || "N/A"}</p>
      <p>Address: {user.address || "N/A"}</p>
      <p>Bio: {user.bio}</p>
      <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default Profile;
