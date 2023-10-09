import { DriversList } from "../components/organisms";
import { useDrivers } from "../hooks/useDrivers";

export const Drivers = () => {
  const { drivers, isLoading, handleOvertake } = useDrivers();

  if (isLoading) {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-8">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">Formula 1 Race</h1>
      <DriversList drivers={drivers} onPress={handleOvertake} />
    </div>
  );
};
