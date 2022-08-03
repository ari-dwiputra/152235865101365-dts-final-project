//import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import ProtectedComponent from "./component/ProtectedComponent";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recipe/:key" element={<ProtectedComponent>
              <Detail />
            </ProtectedComponent>} />
        <Route path="/search/:key" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
