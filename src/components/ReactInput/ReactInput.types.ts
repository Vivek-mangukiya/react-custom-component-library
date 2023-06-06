import React from "react";
export interface ReactInputProps {
  id: string;
  inputType:
    | "text"
    | "date"
    | "email"
    | "search"
    | "number"
    | "file"
    | "password"
    | "hidden"
    | "time"
    | "color"
    | "textarea";
  inputName: string;
  inputValue?: string;
  parantClassName: string;
  labelClassName: string;
  inputPlaceholder?: string;
  dataTestId?: string;
  isReadOnly?: boolean;
  inputClassName?: string;
  inputAutoComplete?: "on" | "off";
  inputLabelText?: string;
  inputGroupClassName?: string;
  isMultiple?: boolean;
  inputErrorText?: string;
  inputAcceptType?: string;
  inputAs?: any;
  errorClassName: string;
  inputRefHandleChange?: (ref: any) => void | any;
  inputHandleChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  inputHandleBlur?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  [x: string]: any;
}
