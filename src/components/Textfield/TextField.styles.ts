import { styled } from "@mui/material";

export const Container = styled("label")(() => ({
  display: "block",
  marginBottom: "1rem",
}));

export const Input = styled("input")<{ error: boolean }>(
  ({ theme, error }) => ({
    width: "100%",
    background: theme.palette.grey[100],
    padding: "12px 10px",
    color: theme.palette.text.primary,
    borderRadius: "4px",
    border: error ? `1px solid ${theme.palette.error.main}` : ``,
  })
);

export const Error = styled("p")(({ theme }) => ({
  fontSize: "0.8rem",
  color: theme.palette.error.main,
}));
