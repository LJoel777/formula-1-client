import { FC } from "react";
import { Image, Text } from "../../atoms";

type DriverCardProps = {
  driver: {
    firstname: string;
    lastname: string;
    team: string;
    place: number;
    code: string;
    imgUrl: string;
  };
  onPress: () => void;
};

export const DriverCard: FC<DriverCardProps> = ({
  driver: { code, firstname, imgUrl, lastname, place, team },
  onPress,
}) => (
  <div className="bg-white p-4 rounded-lg shadow-lg space-y-4 sm:space-y-0 sm:flex sm:items-center">
    <div className="w-40 h-40 rounded-full overflow-hidden m-auto">
      <Image src={imgUrl} alt={code} className="w-full h-full object-cover" />
    </div>
    <div className="sm:flex-grow">
      <Text type="h2" className="text-2xl font-semibold text-center text-blue-800 sm:text-left">
        {firstname} {lastname}
      </Text>
      <Text type="h3" className="text-lg text-gray-600 text-center sm:text-left">
        {team}
      </Text>
      <Text type="h3" className="text-lg text-gray-600 text-center sm:text-left">
        Current Place: {place}
      </Text>
      <Text type="h3" className="text-lg text-gray-600 text-center sm:text-left">
        Code: {code}
      </Text>
    </div>
    <div className="flex flex-col items-center sm:items-end">
      <button
        onClick={onPress}
        className="bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none disabled:bg-gray-400 text-center"
        disabled={place === 1}
      >
        Overtake
      </button>
    </div>
  </div>
);
