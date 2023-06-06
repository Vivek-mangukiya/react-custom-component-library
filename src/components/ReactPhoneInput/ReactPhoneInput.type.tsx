export interface ReactPhoneInputProps {
  id: string;
  inputGroupClassName?: string;
  parantClassName?: string;
  labelClassName: string;
  inputLabelText: string;
  inputName: string;
  inputCountry: string;
  inputValue?: string;
  countryCodeEditable?: boolean;
  inputClassName: string;
  inputHandleChange?: (event: any, name: string) => void | any;
  inputErrorText?: string;
  errorClassName?: string;
  inputPlaceHolder?: string;
  [x: string]: any;
}
