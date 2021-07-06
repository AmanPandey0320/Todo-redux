import { AppBar, Toolbar, Container, ThemeProvider } from "@material-ui/core";
import { Fragment, useState } from "react";
import { useStyles } from "./UI/App.styles";
import WithRedux from "./pages/withRedux";
import WithoutRedux from "./pages/withoutRedux";
import { Provider } from "react-redux";
import { store } from "./redux-store/rootReducer";
import { newTheme } from "./UI/todo.styles";
const App = (props) => {
  const classes = useStyles();
  const [redux, setRedux] = useState(true);
  const handleChange = (open) => (evt) => {
    setRedux(open);
  };
  return (
    <Fragment>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar
          onClick={handleChange(true)}
          className={`${classes.toolbar} ${redux ? "open" : ""}`}
        >
          With Redux
        </Toolbar>
        <Toolbar
          onClick={handleChange(false)}
          className={`${classes.toolbar} ${redux ? "" : "open"}`}
        >
          With-out Redux
        </Toolbar>
      </AppBar>
      <Container className={classes.root}>
        <ThemeProvider theme={newTheme}>
          {redux ? (
            <Provider store={store}>
              <WithRedux />
            </Provider>
          ) : (
            <WithoutRedux />
          )}
        </ThemeProvider>
      </Container>
    </Fragment>
  );
};

export default App;
