import React, { useState, useEffect } from "react";
import { useDrivers } from "../hook/useDrivers";

export const DriversList: React.FC = () => {
  const { drivers, handleOvertake } = useDrivers();

  return (
    <div>
      {drivers.map((driver) => (
        <div key={driver.id}>
          <img src={`http://localhost:8000${driver.imgUrl}`} alt={`${driver.code} Photo`} />
          <div>
            <p>
              {driver.firstname} {driver.lastname}
            </p>
            <p>{driver.team}</p>
            <p>Current Place: {driver.place}</p>
            <p>Code: {driver.code}</p>
          </div>
          <button onClick={() => handleOvertake(driver.id)}>Overtake</button>
        </div>
      ))}
    </div>
  );
};
