import { FC } from "react";
import { DriverCard } from "../../molecules";

type DriversListProps = {
  drivers: {
    id: number;
    firstname: string;
    lastname: string;
    team: string;
    place: number;
    code: string;
    imgUrl: string;
  }[];
  onPress: (id: number) => void;
};

export const DriversList: FC<DriversListProps> = ({ drivers, onPress }) => (
  <div className="flex flex-1 flex-col gap-4 p-4 w-full">
    {drivers.map((driver) => (
      <DriverCard key={driver.id} driver={driver} onPress={() => onPress(driver.id)} />
    ))}
  </div>
);
