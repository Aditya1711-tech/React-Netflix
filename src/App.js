import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Redirect,
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Redirect to="/register" />}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route exact path="/movies" element={<Home type="movies" />}></Route>
        <Route exact path="/series" element={<Home type="series" />}></Route>
        <Route exact path="/watch" element={<Watch />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
