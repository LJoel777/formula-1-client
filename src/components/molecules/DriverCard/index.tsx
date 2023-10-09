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
  <div className="flex bg-white p-4 rounded-lg shadow-lg space-x-4 items-center">
    <div className="w-40 h-40 rounded-full overflow-hidden">
      <Image src={imgUrl} alt={code} className="w-full h-full object-cover" />
    </div>
    <div className="flex-grow">
      <Text type="h2" className="text-2xl font-semibold text-blue-800">
        {firstname} {lastname}
      </Text>
      <Text type="h3" className="text-lg text-gray-600">
        {team}
      </Text>
      <Text type="h3" className="text-lg text-gray-600">
        Current Place: {place}
      </Text>
      <Text type="h3" className="text-lg text-gray-600">
        Code: {code}
      </Text>
    </div>
    <button
      onClick={onPress}
      className="bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none disabled:bg-gray-400"
      disabled={place === 1}
    >
      Overtake
    </button>
  </div>
);
