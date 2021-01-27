import { createMuiTheme } from "@material-ui/core/styles";
import { purple, blue, black, navy } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#222222",
    },
    secondary: {
      main: "#fff",
    },
  },
  background: {
    default: "#fff",
  },
});
export default theme;
