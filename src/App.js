import { AppBar, Toolbar, Container, ThemeProvider } from "@material-ui/core";
import { Fragment, useState } from "react";
import { useStyles } from "./UI/App.styles";
import WithRedux from "./pages/withRedux";
import WithoutRedux from "./pages/withoutRedux";
import WithContext from "./pages/withContext";
import { Provider } from "react-redux";
import { store } from "./redux-store/rootReducer";
import { newTheme } from "./UI/todo.styles";
const App = (props) => {
  const classes = useStyles();
  const [redux, setRedux] = useState(true);
  const [nav, setNav] = useState(0);
  const handleChange = (open) => (evt) => {
    setNav(open);
  };
  return (
    <Fragment>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar
          onClick={handleChange(0)}
          className={`${classes.toolbar} ${nav === 0 ? "open" : ""}`}
        >
          With Redux
        </Toolbar>
        <Toolbar
          onClick={handleChange(1)}
          className={`${classes.toolbar} ${nav === 1 ? "open" : ""}`}
        >
          With Custom Store
        </Toolbar>
        <Toolbar
          onClick={handleChange(2)}
          className={`${classes.toolbar} ${nav === 2 ? "open" : ""}`}
        >
          With Context
        </Toolbar>
      </AppBar>
      <Container className={classes.root}>
        <ThemeProvider theme={newTheme}>
          {/* {redux ? (
            <Provider store={store}>
              <WithRedux />
            </Provider>
          ) : (
            <WithoutRedux />
          )} */}
          {nav === 0 && (
            <Provider store={store}>
              <WithRedux />
            </Provider>
          )}
          {(nav === 1) && <WithoutRedux/>}
          {(nav === 2) && <WithContext/>}
        </ThemeProvider>
      </Container>
    </Fragment>
  );
};

export default App;
