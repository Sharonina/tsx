import { useEffect, useRef, useState } from "react";
import type { ImgHTMLAttributes } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
}

type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNativeTypes;

//hay que dejar explícito que es un componente de react
export const LazyImage = ({ src, alt, ...ImgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null); // se debe poner el elemento con el que se va a trabajar e inicializar en null cuando no sabemos el tipo

  const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    //nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        //on intersection > console.log
        if (entry.isIntersecting) {
          setCurrentSrc(src);
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
  }, [src]);

  return <img ref={node} src={src} alt={alt} {...ImgProps} />;
};
