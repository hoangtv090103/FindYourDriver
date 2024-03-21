import { useState, useEffect } from 'react'
import './App.css'
import axios from './configs/axios'



function App() {
  const [vehicleType, setVehicleType] = useState({});
  
  const fetchVehicleType = async () => {
    try {
      const response = await axios.get('http://localhost:3000/vehicle-type');
      setVehicleType(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchVehicleType();
  }, []);

  return (
    <>
      <div>
        <p>
          {vehicleType.name}
        </p>
       </div>
    </>
  )
}

export default App
