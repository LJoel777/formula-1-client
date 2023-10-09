import { Text } from "../components/atoms";

export const Root = () => (
  <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-8">
    <Text type="h1" className="font-bold text-center">
      You can find the drivers list in the{" "}
      <a href="/drivers" className="text-blue-500 hover:text-blue-700 transition duration-300">
        /drivers
      </a>{" "}
      route.
    </Text>
  </div>
);
