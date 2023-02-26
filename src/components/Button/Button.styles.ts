import { darken, styled } from "@mui/material";

export const Btn = styled("button")(({ theme }) => ({
  width: "100%",
  border: "1px solid transparent",
  color: "#FFF",

  "&:hover": {
    backgroundColor: `${darken(theme.palette.primary.main, 0.2)}`,
  },
}));
