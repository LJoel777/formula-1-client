import { ComponentProps, FC } from "react";

type ImageProps = ComponentProps<"img">;

const baseUrl = process.env.REACT_APP_API_URL;

export const Image: FC<ImageProps> = ({ src, alt, className }) => (
  <img src={`${baseUrl}${src}`} alt={alt} className={className} />
);
