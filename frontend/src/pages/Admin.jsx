import { useEffect, useState } from "react";
import axios from "axios";
import ScheduleSessionForm from "../components/ScheduleSessionForm";
import "./admin.css";

function Admin() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    axios
      .get("https://dynamic-user-availiblity-event.onrender.com/api/users")
      .then((response) => setUsers(response.data));
  }, []);

  const fetchAvailability = async (userId) => {
    try {
      const response = await axios.get(
        `https://dynamic-user-availiblity-event.onrender.com/api/availability/${userId}`
      );
      setAvailability(response.data);
    } catch (error) {
      console.error("Error fetching availability:", error);
    }
  };

  return (
    <div className="admin-container d-flex justify-content-center align-items-center vh-100">
      <div className="admin-box p-4 rounded">
        <h1 className="text-center mb-4">Admin Dashboard</h1>
        <div className="mb-3">
          <select
            className="form-select"
            onChange={(e) => setSelectedUser(users[e.target.value])}
          >
            <option value="">Select User</option>
            {users.map((user, index) => (
              <option key={user._id} value={index}>
                {user.email}
              </option>
            ))}
          </select>
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary"
            onClick={() => fetchAvailability(selectedUser?._id)}
          >
            View Availability
          </button>
        </div>
        {availability.length > 0 && (
          <div className="mt-4">
            <ScheduleSessionForm availability={availability} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
