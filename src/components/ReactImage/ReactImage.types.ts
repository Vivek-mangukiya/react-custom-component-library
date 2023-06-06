export interface ReactImageProps {
  id: string;
  dataTestId: string;
  imageSrc: string | undefined;
  imageAltText?: string;
  imageClassName?: string;
  imageRef?: (ref: any) => void | any;
  imageTypes?:
    | "fluid"
    | "rounded"
    | "roundedCircle"
    | "thumbnail"
    | "bsPrefix"
    | undefined;
}
