import { styled } from "@mui/material";
import Link from "next/link";

export const CustomLink = styled(Link)(({ theme }) => ({
  fontWeight: 700,
  padding: "1px 3px",
  borderRadius: "3px",

  "&:hover": {
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
}));
