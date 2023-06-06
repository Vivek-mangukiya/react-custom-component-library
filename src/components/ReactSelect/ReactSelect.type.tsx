import { MouseEventHandler } from "react";
import { ActionMeta, MultiValue, SingleValue } from "react-select";

export interface ReactSelectProps {
  id: string;
  dataTestId: string;
  selectName: string;
  selectClassName: string;
  selelctOptions: any;
  classNamePrefix: string;
  groupClassName: string;
  isDisabled: boolean;
  isSearchable: boolean;
  parantClassName: string;
  labelClassName: string;
  errorClassName: string;
  labelText: string;
  formatOptionLabel: any | JSX.Element | JSX.Element[];
  errorText: string;
  hasResetButton: JSX.Element | JSX.Element[];
  selectRef: (ref: any) => void | any;
  handleChange: (
    newValue: MultiValue<string> | SingleValue<string>,
    actionMeta: ActionMeta<string>
  ) => void;
  [x: string]: any;
}
