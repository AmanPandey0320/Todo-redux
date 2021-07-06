import { makeStyles, createMuiTheme } from "@material-ui/core";

export const newTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#018224"
    },
    secondary: {
      main: "#ff4800"
    }
  }
});

const useStyles = makeStyles((theme) => ({
  addtask: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    marginInline: "16px",
    marginTop: "16px"
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "2px"
  },
  listBtn: {}
}));

export default useStyles;
