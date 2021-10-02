import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Switch,
  Route
}
  from "react-router-dom";

function App() {
  return (
    <Router>
      <switch>
        <Route path="/">
          <Home />
        </Route>
      </switch>
    </Router>
  );
}

export default App;