import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";

import { Error } from "./style";
import { Input, InputProps } from "../Input";

type RegularInputProps = InputProps & {
  control: Control<any>;
  name: string;
  isActive: boolean;
  error?: FieldError;
};

export function InputControl({
  control,
  name,
  error,
  isActive,
  ...rest
}: RegularInputProps) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            isActive={isActive}
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
      />

      {error && <Error>{error.message}</Error>}
    </>
  );
}
