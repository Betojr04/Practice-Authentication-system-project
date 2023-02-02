import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateDashboard = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      Navigate("/Login");
    } else {
      fetch(
        "https://3001-betojr04-practiceauthen-au7r01f53cj.ws-us85.gitpod.io/api/token",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => {
          console.log(error);
          Navigate("/Login");
        });
    }
  }, []);
  return <div>Private-dashboard</div>;
};

export default PrivateDashboard;
