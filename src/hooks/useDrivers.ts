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

const baseUrl = process.env.REACT_APP_API_URL;

export const useDrivers = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOvertake = async (driverId: number) => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch(`${baseUrl}/api/drivers/${driverId}/overtake`, {
        method: "POST",
      });

      if (response.status !== 200) {
        throw new Error("Failed to overtake");
      }

      await fetchDrivers();
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDrivers = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch(`${baseUrl}/api/drivers`);
      const data = await response.json();
      const sortedDrivers = data.sort((a: Driver, b: Driver) => a.place - b.place);

      setDrivers(sortedDrivers);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  return { drivers, isLoading, error, handleOvertake };
};
