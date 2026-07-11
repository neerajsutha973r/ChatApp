import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Welcome.css";

function Welcome() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  if(!user){
    return (
        <h2>Please Login First</h2>
    )
  }
  else{
  return (
    <div className="welcome-page">
      <div className="welcome-card">

        <h1>Welcome, {user.username}</h1>

        <p>
          You're successfully logged in.
          Ready to start chatting with everyone?
        </p>

        <button onClick={() => navigate("/chat")}>
          Start Chatting
        </button>

      </div>
    </div>
  );
}
}

export default Welcome;