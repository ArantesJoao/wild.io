import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { DescriptionInput, InputProps } from "../DescriptionInput";

import { Error } from "./style";

type DescriptionProps = InputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
};

export function DescriptionInputControl({
  control,
  name,
  error,
  ...rest
}: DescriptionProps) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DescriptionInput onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <Error>{error.message}</Error>}
    </>
  );
}
