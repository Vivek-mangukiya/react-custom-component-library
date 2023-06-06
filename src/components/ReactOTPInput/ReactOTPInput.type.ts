export interface ReactOTPInputProps {
  id: string;
  numInputs: number;
  renderSeparator?: string;
  renderInput: any;
  containerStyle?: string;
  inputGroupClassName?: string;
  parantClassName?: string;
  labelClassName: string;
  inputLabelText: string;
  inputName: string;
  inputValue?: string;
  inputHandleChange?: any;
  inputErrorText?: string;
  errorClassName?: string;
  [x: string]: any;
}
