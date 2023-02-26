import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#51459e",
      dark: "#505887",
    },
    secondary: {
      main: "#f9896b",
    },
    common: {
      white: "#FFF",
      black: "#000",
    },
    error: {
      main: "#f44336",
    },
    background: {
      paper: "#F5F9FD",
      default: "#F5F9FD",
    },
    text: {
      primary: "#5B5B5B",
      secondary: "#9698AB",
    },
    grey: {
      100: "#F9F9F9",
      200: "#eeeeee",
      300: "#E7E7E7",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
    },
  },
});
