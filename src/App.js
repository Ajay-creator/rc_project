import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import Home from "./Home";
import Blogs from "./Blogs";
import Login from "./Login";
import CreatePage from "./CreatePage";
import PostPage from "./PostPage";
import MyAccount from "./MyAccount";
import Projects from "./Projects";
// k ra
function App() {
  const [{ blogs }, dispatch] = useStateValue();
  console.log("from App => ", blogs);
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/postPage" component={PostPage} />

          <Route path="/createBlog">
            <Header />
            <CreatePage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/myAccount">
            <Header />
            <MyAccount />
          </Route>
          <Route path="/projects">
            <Header />
            <Projects />
          </Route>
          <Route path="/blogs">
            <Header />
            <Blogs />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
