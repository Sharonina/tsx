const random = () => Math.floor(Math.random() * 123) + 1;

//hay que dejar explícito que es un componente de react
export const RandomFox = (): JSX.Element => {
  const image: string = `https://randomFox.ca/images/${random()}.jpg`;

  return (
    <img
      width={320}
      height="auto"
      className="mx-auto rounded-md bg-gray-300"
      src={image}
    />
  );
};
