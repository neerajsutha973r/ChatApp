import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await AuthService.register(formData);

      alert(response.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
  <div className="register-card">
    <h1>Register</h1>

    <form className="register-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
    </form>

    <div className="register-footer">
      Already have an account? <Link to="/">Login</Link>
    </div>
  </div>
</div>
  );
}

export default Register;