import { useRef } from "react";

interface Props {
  image: string;
  alt: string;
}

//hay que dejar explícito que es un componente de react
export const RandomFox = ({ image, alt }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null); // se debe poner el elemento con el que se va a trabajar e inicializar en null cuando no sabemos el tipo

  return (
    <img
      ref={node}
      width={320}
      height="auto"
      className="mx-auto rounded-md bg-gray-300"
      src={image}
      alt={alt}
    />
  );
};
