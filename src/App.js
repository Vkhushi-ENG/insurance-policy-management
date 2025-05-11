import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import AdminLogin from './pages/Adminlogin';
import CustomerLogin from './pages/Customerlogin';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/customer" element={<CustomerDashboard />} />
          <Route path="/Adminlogin" element={<AdminLogin />} />
          <Route path="/Customerlogin" element={<CustomerLogin />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
