import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => setUser(res.data))
    .catch((err) => console.error("Profile fetch error:", err));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>Email: {user.email}</h2>
      <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default Profile;
