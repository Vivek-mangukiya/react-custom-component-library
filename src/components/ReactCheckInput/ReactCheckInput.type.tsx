import { ChangeEvent } from "react";

export interface ReactCheckInputProps {
  id: string;
  inputName: string;
  inputType: "checkbox" | "radio";
  inputClassName: string;
  dataTestId?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  errorText?: string;
  inputChecked?: boolean;
  inputLabel?: string;
  inputDisabled?: boolean;
  inputValue?: string;
  inputRef?: (ref: any) => void | any;
  [x: string]: any;
}
