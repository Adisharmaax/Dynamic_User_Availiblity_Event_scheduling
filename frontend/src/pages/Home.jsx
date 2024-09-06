import { useState } from "react";
import axios from "axios";
import AvailabilityForm from "../components/AvailabilityForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");

  const loginUser = async (email) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        { email }
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleSubmit = () => {
    if (email) {
      loginUser(email);
    }
  };

  return (
    <div className="home-container d-flex justify-content-center align-items-center">
      <div className="login-box shadow-lg p-5 rounded">
        <h1 className="text-center mb-4">Availability Scheduler</h1>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary w-100">
          Submit
        </button>
        {user && <AvailabilityForm user={user._id} />}
      </div>
    </div>
  );
}

export default Home;
