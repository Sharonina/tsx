import { useEffect, useRef, useState } from "react";

interface Props {
  image: string;
  alt: string;
}

//hay que dejar explícito que es un componente de react
export const RandomFox = ({ image, alt }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null); // se debe poner el elemento con el que se va a trabajar e inicializar en null cuando no sabemos el tipo

  const [src, setSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    //nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        //on intersection > console.log
        if (entry.isIntersecting) {
          setSrc(image);
        }
      });
    });

    //observe node
    if (node.current) {
      observer.observe(node.current);
    }

    //desconect  - clean
    return () => {
      observer.disconnect();
    };
  }, [image]);

  return (
    <img
      ref={node}
      width={320}
      height="auto"
      className="mx-auto rounded-md bg-gray-300"
      src={src}
      alt={alt}
    />
  );
};
