import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

//importing general components
import NavBar from "./components/general/NavBar";
//landing components
import Backgroud from "./components/landing/Backgroud";
//user components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          {/* <Backgroud /> */}
          <Route exact path="/" component={Backgroud} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
