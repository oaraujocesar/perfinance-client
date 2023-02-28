"use client";

import { useTheme } from "@mui/material";
import { ForwardedRef, forwardRef, InputHTMLAttributes, Ref } from "react";

import { Container, Error, Input } from "./TextField.styles";

export interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMsg?: string;
}

export const Textfield = forwardRef(
  (props: TextfieldProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    const { palette } = useTheme();

    return (
      <Container htmlFor={props.name}>
        <p className="text-primary">{props.label}</p>
        <Input
          {...props}
          ref={ref}
          style={{
            border: props.errorMsg ? `1px solid ${palette.error.main}` : "",
          }}
        />
        {props.errorMsg && (
          <Error className="color-error">{props.errorMsg}</Error>
        )}
      </Container>
    );
  }
);

Textfield.displayName = "Textfield";
