import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import PersonSchema from "./components/PersonSchema";
import ParkingPage from "./pages/ParkingPage";

const App = () => {
  return (
    <Router basename="/portfolio/">
      <PersonSchema />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ParkingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
