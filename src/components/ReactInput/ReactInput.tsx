import { FunctionComponent } from "react";
import { Form } from "react-bootstrap";
import { ReactInputProps } from "./ReactInput.types";

export const ReactInput: FunctionComponent<ReactInputProps> = (
  {
    id,
    parantClassName,
    labelClassName,
    inputType,
    inputName,
    inputValue,
    inputPlaceholder,
    dataTestId,
    isReadOnly,
    inputClassName,
    inputAutoComplete,
    inputLabelText,
    inputGroupClassName,
    isMultiple,
    inputErrorText,
    inputAcceptType,
    inputAs,
    inputRefHandleChange,
    inputHandleChange,
    inputHandleBlur,
    errorClassName,
  },
  ...rest
) => {
  const onBlur = (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => {
    if (inputHandleBlur) inputHandleBlur(event);
  };

  return (
    <>
      <Form.Group controlId={id} className={inputGroupClassName}>
        <div className={parantClassName}>
          <Form.Label className={labelClassName}>{inputLabelText}</Form.Label>
          <Form.Control
            data-test-id={dataTestId}
            id={id}
            type={inputType}
            ref={inputRefHandleChange}
            placeholder={inputPlaceholder}
            name={inputName}
            readOnly={isReadOnly}
            value={inputValue}
            className={inputClassName}
            autoComplete={inputAutoComplete}
            multiple={isMultiple}
            accept={inputAcceptType}
            as={inputAs}
            onBlur={onBlur}
            onChange={inputHandleChange}
            {...rest}
          />

          {inputErrorText && inputErrorText !== "" && (
            <>
              <span className={errorClassName}>{inputErrorText}</span>
            </>
          )}
        </div>
      </Form.Group>
    </>
  );
};
