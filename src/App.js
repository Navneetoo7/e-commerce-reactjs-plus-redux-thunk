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
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Backgroud />
          {/* <Routes>
          <Route exact path="/" component={Backgroud} />
        </Routes> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
