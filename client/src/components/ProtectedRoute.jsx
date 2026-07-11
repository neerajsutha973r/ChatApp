import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";
import "./ProtectedRoute.css";
function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="login">
      <Navbar/>
      <h2 >Please login</h2>
      </div>
    );
  }

  return children;
}

export default ProtectedRoute;