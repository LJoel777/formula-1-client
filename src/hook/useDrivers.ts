import { useState, useEffect } from "react";

export type Driver = {
  id: number;
  code: string;
  firstname: string;
  lastname: string;
  country: string;
  team: string;
  imgUrl: string;
  place: number;
};

export const useDrivers = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  const handleOvertake = async (driverId: number) => {
    try {
      const response = await fetch(`http://localhost:8000/api/drivers/${driverId}/overtake`, {
        method: "POST",
      });

      if (response.status === 200) {
        await fetchDrivers();
      } else {
        console.log(response.status);
        // Handle errors, such as driver cannot overtake, here.
      }
    } catch (error) {
      console.error("Error overtaking driver:", error);
    }
  };

  const fetchDrivers = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/drivers");
      const data = await response.json();
      const sortedDrivers = data.sort((a: Driver, b: Driver) => a.place - b.place);
      setDrivers(sortedDrivers);
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  return { drivers, handleOvertake };
};
