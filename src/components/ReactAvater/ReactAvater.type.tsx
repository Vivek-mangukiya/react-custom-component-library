export interface ReactAvaterProps {
  parentClassName?: string;
  imageUrl?: string;
  profileNameAvatar?: string;
  innerClassName?: string;
  imageClassName?: string;
  textClassName?: string;
  jointTextName?: string;
  text?: string | JSX.Element | JSX.Element[];
  ref?: (ref: any) => void | any;
}
