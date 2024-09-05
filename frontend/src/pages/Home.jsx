import { useState } from 'react';
import axios from 'axios';
import AvailabilityForm from '../components/AvailabilityForm';


function Home() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');

  const loginUser = async (email) => {
    try {
      const response = await axios.post('https://backend-qm1n.onrender.com/api/users/login', { email });
      setUser(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleSubmit = () => {
    if (email) {
      loginUser(email);
    }
  };

  return (
    <div className="container position-absolute top-50 start-50 translate-middle  ">
      <h1 className='text-center'>Availability Scheduler</h1>
      <div className="row">
      <input 
        type="email" 
        placeholder="Enter your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        className="form-control mb-3 border-3 col-8" 
      />
      <button 
        onClick={handleSubmit}
        className="btn btn-primary col"
      >
        Submit
      </button></div>
      {user && <AvailabilityForm user={user._id} />}
    </div>
  );
}

export default Home;
