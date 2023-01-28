import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateDashboard = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      Navigate("/Login");
    }
  }, []);
  return <div>Private-dashboard</div>;
};

export default PrivateDashboard;
