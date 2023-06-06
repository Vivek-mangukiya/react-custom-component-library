import { FunctionComponent } from "react";
import { Form } from "react-bootstrap";
import { ReactPhoneInputProps } from "./ReactPhoneInput.type";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const ReactPhoneInput: FunctionComponent<ReactPhoneInputProps> = ({
  id,
  inputGroupClassName,
  parantClassName,
  labelClassName,
  inputLabelText,
  inputName,
  inputCountry,
  inputValue,
  countryCodeEditable,
  inputClassName,
  inputHandleChange,
  inputErrorText,
  errorClassName,
  inputPlaceHolder,
  ...rest
}) => {
  return (
    <>
      <Form.Group controlId={id} className={inputGroupClassName}>
        <div className={parantClassName}>
          <Form.Label className={labelClassName}>{inputLabelText}</Form.Label>
          <PhoneInput
            country={inputCountry}
            // name={inputName}
            // id={id}
            countryCodeEditable={countryCodeEditable}
            value={inputValue}
            onChange={inputHandleChange}
            placeholder={inputPlaceHolder}
            // inputProps={{
            //   enableSearch: true,
            // }}
            {...rest}
          />

          {inputErrorText && inputErrorText !== "" && (
            <span className={errorClassName}>{inputErrorText}</span>
          )}
        </div>
      </Form.Group>
    </>
  );
};
