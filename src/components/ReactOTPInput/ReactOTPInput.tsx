import { FunctionComponent } from "react";
import { Form } from "react-bootstrap";
import OtpInput from "react-otp-input";
import { ReactOTPInputProps } from "./ReactOTPInput.type";

export const ReactOTPInput: FunctionComponent<ReactOTPInputProps> = ({
  id,
  inputGroupClassName,
  parantClassName,
  labelClassName,
  inputLabelText,
  inputValue,
  inputHandleChange,
  numInputs,
  renderSeparator,
  renderInput,
  containerStyle,
  inputErrorText,
  errorClassName,
  ...rest
}) => {
  return (
    <Form.Group controlId={id} className={inputGroupClassName}>
      <div className={parantClassName}>
        <Form.Label className={labelClassName}>{inputLabelText}</Form.Label>
        <OtpInput
          value={inputValue}
          onChange={inputHandleChange}
          numInputs={numInputs}
          renderSeparator={renderSeparator}
          renderInput={renderInput}
          containerStyle={containerStyle}
          {...rest}
        />
        {inputErrorText && inputErrorText !== "" && (
          <span className={errorClassName}>{inputErrorText}</span>
        )}
      </div>
    </Form.Group>
  );
};
