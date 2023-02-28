import { styled, Typography } from "@mui/material";

export const Form = styled("form")(() => ({}));
export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  textAlign: "center",
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: "center",
  marginBottom: "2rem",
}));

export const SignupLink = styled(Typography)(() => ({
  display: "block",
  marginTop: "1.5rem",
  textAlign: "center",
}));
