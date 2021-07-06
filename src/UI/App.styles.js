import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#2e2e2e",
    color: "white",
    display: "flex",
    flexFlow: "row wrap"
  },
  toolbar: {
    "&.open": {
      backgroundColor: "#32a852",
      color: "#424242"
    },
    "&:hover": {
      backgroundColor: "#e2e2e2",
      color: "#424242",
      cursor: "pointer"
    },
    "&.open:hover": {
      backgroundColor: "tomato",
      color: "white",
      cursor: "pointer"
    }
  },
  root: {
    marginTop: "16px",
    marginInline: "8px"
  }
}));
