import { ChangeEvent, FunctionComponent } from "react";
import { Form } from "react-bootstrap";
import { ReactCheckInputProps } from "./ReactCheckInput.type";

export const ReactCheckInput: FunctionComponent<ReactCheckInputProps> = (
  {
    id,
    inputName,
    inputType,
    inputClassName,
    dataTestId,
    errorText,
    inputChecked,
    inputLabel,
    inputDisabled,
    inputValue,
    handleChange,
    inputRef,
  },
  ...rest
) => {
  return (
    <>
      <Form.Check
        key={inputName}
        className={inputClassName}
        id={id}
        type={inputType}
        name={inputName}
        label={inputLabel}
        value={inputValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
        checked={inputChecked}
        data-test-id={dataTestId}
        disabled={inputDisabled}
        ref={inputRef}
        {...rest}
      />
    </>
  );
};
