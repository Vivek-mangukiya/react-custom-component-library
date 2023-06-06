import React from "react";

export interface ReactButtonProps {
  dataTestId: string;
  id: string;
  buttonName: string;
  buttonType: "submit" | "button" | "reset";
  buttonVariant?: string;
  buttonClassName?: string;
  buttonIsDisable?: boolean;
  buttonText: string | JSX.Element | JSX.Element[];
  buttonRef?: (ref: any) => void | any;
  buttonHandleChange?: (
    event: React.MouseEvent<HTMLElement> | undefined
  ) => void;
  [x: string]: any;
}
