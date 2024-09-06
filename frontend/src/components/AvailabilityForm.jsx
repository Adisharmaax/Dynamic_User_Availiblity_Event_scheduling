import { useState, useEffect } from "react";
import axios from "axios";

function AvailabilityForm({ user }) {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [duration, setDuration] = useState(null);
  const [error, setError] = useState("");

  // Calculate duration whenever start or end time changes
  useEffect(() => {
    if (start && end) {
      const startTime = new Date(start);
      const endTime = new Date(end);

      if (endTime > startTime) {
        const diff = Math.abs(endTime - startTime); // Difference in milliseconds
        setDuration(Math.floor(diff / 60000)); // Convert to minutes
        setError(""); // Clear any previous error message
      } else {
        setDuration(null); // Reset duration if the end time is invalid
        setError("End time must be greater than start time.");
      }
    }
  }, [start, end]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!error) {
      try {
        await axios.post("http://localhost:5000/api/availability", {
          user,
          start,
          end,
          duration,
        });
        alert("Availability added!");
      } catch (error) {
        console.error("Error adding availability:", error);
      }
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label>Start Time</label>
        <input
          type="datetime-local"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label>End Time</label>
        <input
          type="datetime-local"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="form-control"
          required
        />
      </div>
      {error && <div className="text-danger mb-3">{error}</div>}
      {duration !== null && (
        <div className="mb-3">
          <label>Duration</label>
          <p>
            <b>{duration} minutes</b>
          </p>
        </div>
      )}
      <button type="submit" className="btn btn-primary">
        Add Availability
      </button>
    </form>
  );
}

export default AvailabilityForm;
