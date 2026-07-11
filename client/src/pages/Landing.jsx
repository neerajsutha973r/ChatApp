import { Link } from "react-router-dom";
import "./Landing.css";
import Navbar from "../components/Navbar.jsx";
function Landing() {
  return (
    <div className="landing">
    <Navbar/>
      

      <section className="hero">

        <h1>
          Connect Instantly,
          <br />
          Chat Seamlessly
        </h1>

        <p>
          A real-time chat application built with
          React, Node.js and Socket.io.
        </p>

        <div className="hero-buttons">

          <Link to="/welcome">
            <button>Get Started</button>
          </Link>

        </div>

      </section>

      <section className="features">

        <div className="card">
          <h3>Real-Time</h3>
          <p>Messages delivered instantly.</p>
        </div>

        <div className="card">
          <h3>Secure</h3>
          <p>Password encrypted using bcrypt.</p>
        </div>

        <div className="card">
          <h3>Fast</h3>
          <p>Powered by Socket.io.</p>
        </div>

      </section>

    </div>
  );
}

export default Landing;