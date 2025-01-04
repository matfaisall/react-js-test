import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import HomeScreen from "../pages/homescreen";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
