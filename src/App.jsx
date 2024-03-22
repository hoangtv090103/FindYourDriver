import { useState, useEffect } from "react";
import "./App.css";
import axios from "./configs/axios";
import LoginPage from "./pages/LoginPage";

function App() {
  const [vehicleType, setVehicleType] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchVehicleType = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/vehicle-type")
      .then((response) => {
        setVehicleType(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  };

  useEffect(fetchVehicleType, []);

  return (
    <>
      {/* <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1>Vehicle Type</h1>
            <ul>
              {vehicleType.map((type, index) => (
                <li key={index}>{type.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div> */}
      <LoginPage />
    </>
  );
}

export default App;
