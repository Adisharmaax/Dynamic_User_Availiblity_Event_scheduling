import { useState } from "react";
import axios from "axios";

function ScheduleSessionForm({ availability }) {
  const [selectedSlotId, setSelectedSlotId] = useState(null);

  const handleSchedule = async () => {
    if (!selectedSlotId) return;

    const selectedSlot = availability.find(
      (slot) => slot._id === selectedSlotId
    );
    if (!selectedSlot) return;

    try {
      await axios.post("http://localhost:5000/api/sessions", {
        user: selectedSlot.user,
        start: selectedSlot.start,
        end: selectedSlot.end,
        attendees: [{ name: "Admin", email: "admin@example.com" }],
        type: "one-on-one",
      });
      alert("Session scheduled successfully!");
    } catch (error) {
      console.error("Error scheduling session:", error);
      alert(
        "Failed to schedule session. Please check the console for details."
      );
    }
  };

  return (
    <div>
      <select
        onChange={(e) => setSelectedSlotId(e.target.value)}
        className="form-select"
      >
        <option value="">Select a slot</option>
        {availability.map((slot) => (
          <option key={slot._id} value={slot._id}>
            {new Date(slot.start).toLocaleString()} -{" "}
            {new Date(slot.end).toLocaleString()}
          </option>
        ))}
      </select>
      <button
        onClick={handleSchedule}
        className="btn btn-success mt-3"
        disabled={!selectedSlotId}
      >
        Schedule Session
      </button>
    </div>
  );
}

export default ScheduleSessionForm;
