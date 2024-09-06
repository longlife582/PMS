import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login"; 
import SignUp from "./pages/signUp"; 
import HomePage from "./pages/Home";
import TenantsPage from "./pages/tenants";
import PropertyPage from "./pages/properties";
import StaffPage from "./pages/staff";
import PaymentHistroy from "./pages/payment";
import Maintenance from "./pages/maintence";
import Messages from "./pages/message";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<LoginForm />} />{" "}
        {}
        <Route path="/home" element={<HomePage />} />
        <Route path="/tenant" element={<TenantsPage />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/payment" element={<PaymentHistroy />} />
        <Route path="/maintance" element={<Maintenance />} />
        <Route path="/message" element={<Messages />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
