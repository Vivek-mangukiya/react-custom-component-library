import { FunctionComponent } from "react";
import { Image } from "react-bootstrap";
import { ReactImageProps } from "./ReactImage.types";

export const ReactImage: FunctionComponent<ReactImageProps> = ({
  id,
  dataTestId,
  imageSrc,
  imageAltText,
  imageClassName,
  imageRef,
  imageTypes,
}) => {
  return (
    <Image
      data-test-id={dataTestId}
      id={id}
      alt={imageAltText}
      src={imageSrc}
      className={imageClassName}
      ref={imageRef}
      // {...imageTypes}
    />
  );
};
