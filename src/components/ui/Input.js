import React from "react";
import InputAntd from "antd/lib/input";
import { ComponentContainer } from "./component-container";

export const Input = ({
  value,
  required = false,
  hidden = false,
  error,
  label,
  variant = "outlined",
  disabled,
  animation,
  ...props
}) => {
  const Container = ComponentContainer[variant];

  return (
    <Container
      value={value}
      required={required}
      hidden={hidden}
      error={error}
      label={label}
      disabled={disabled}
      animation={animation}
    >
      <InputAntd
        bordered={false}
        size="large"
        placeholder=""
        value={value}
        disabled={disabled}
        allowClear={!disabled}
        {...props}
      />
    </Container>
  );
};
