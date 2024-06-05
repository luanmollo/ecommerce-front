import { Carousel, CarouselCaption } from "react-bootstrap"
import { FC } from "react";
import styles from "../GenericGallery/GenericGallery.module.css"
import { IImagen } from "../../types/Imagen";

interface IPropsGenericGallery {
    imagenes: IImagen[] | undefined;
}

export const GenericGallery : FC<IPropsGenericGallery> = ({imagenes}) => {
  return (
    <Carousel>
      {imagenes? imagenes.map((imagen: IImagen, i: number) => 
        <Carousel.Item key={i} className={styles.carouselItem} >
          <img src={imagen.url}/>
        </Carousel.Item>
      ) : (
        <Carousel.Item>
          <CarouselCaption>
            No hay imágenes para mostrar
          </CarouselCaption>
        </Carousel.Item>
      )}
    </Carousel>
  )
}