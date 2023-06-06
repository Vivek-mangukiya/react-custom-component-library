import { FunctionComponent } from "react";
import { Form } from "react-bootstrap";
import { ReactSelectProps } from "./ReactSelect.type";
import Select from "react-select";

export const ReactSelect: FunctionComponent<ReactSelectProps> = ({
  id,
  dataTestId,
  selectRef,
  selectName,
  selectClassName,
  selelctOptions,
  selelctValue,
  selelctDefaultValue,
  classNamePrefix,
  parantClassName,
  groupClassName,
  labelClassName,
  errorClassName,
  isDisabled,
  isSearchable,
  labelText,
  handleChange,
  formatOptionLabel,
  errorText,
  hasResetButton,
  ...rest
}) => {
  return (
    <>
      <Form.Group controlId={id} className={`${groupClassName}`}>
        <Form.Label className={labelClassName}>{labelText}</Form.Label>
        <div className={parantClassName}>
          <Select
            id={id}
            data-test-id={dataTestId}
            className={`${selectClassName}`}
            classNamePrefix={classNamePrefix}
            isDisabled={isDisabled}
            isSearchable={isSearchable}
            name={selectName}
            options={selelctOptions}
            value={selelctValue}
            defaultValue={selelctDefaultValue}
            formatOptionLabel={formatOptionLabel}
            onChange={handleChange}
            ref={selectRef}
            {...rest}
          />
          {hasResetButton && hasResetButton}
        </div>
        {errorText !== "" && (
          <span className={errorClassName}>{errorText}</span>
        )}
      </Form.Group>
    </>
  );
};
