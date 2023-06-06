import { FunctionComponent } from "react";
import { Image } from "react-bootstrap";
import { ReactAvaterProps } from "./ReactAvater.type";

export const ReactAvater: FunctionComponent<ReactAvaterProps> = ({
  parentClassName,
  imageUrl,
  imageClassName,
  innerClassName,
  textClassName,
  jointTextName,
  text,
  ref,
}) => {
  return (
    <>
      <div className={parentClassName} ref={ref}>
        {imageUrl && imageUrl !== "" ? (
          <Image src={imageUrl} fluid className={imageClassName} />
        ) : (
          <span className={textClassName}>{text}</span>
        )}
        {innerClassName && innerClassName !== "" && (
          <div className={innerClassName}>
            {/* <Minus className="text-color-shwet" /> */}
            <span>{jointTextName}</span>
          </div>
        )}
      </div>
    </>
  );
};
