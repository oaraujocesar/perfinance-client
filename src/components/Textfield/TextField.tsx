"use client";

import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

import { Container, Error, Input } from "./TextField.styles";

export interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMsg?: string;
}

export const Textfield = forwardRef(
  (props: TextfieldProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => (
    <Container htmlFor={props.name}>
      <p className="text-primary">{props.label}</p>
      <Input ref={ref} error={!!props.errorMsg} {...props} />
      {props.errorMsg && (
        <Error className="color-error">{props.errorMsg}</Error>
      )}
    </Container>
  )
);

Textfield.displayName = "Textfield";
