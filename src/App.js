import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
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
        <NavBar />
        {/* <Backgroud /> */}
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Backgroud />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
