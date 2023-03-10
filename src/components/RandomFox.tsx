interface Props {
  image: string;
  alt: string;
}

//hay que dejar explícito que es un componente de react
export const RandomFox = ({ image, alt }: Props): JSX.Element => {
  return (
    <img
      width={320}
      height="auto"
      className="mx-auto rounded-md bg-gray-300"
      src={image}
      alt={alt}
    />
  );
};
