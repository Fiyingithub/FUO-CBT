import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/Auth/Admin/SignUp";
import AdminLogin from "./pages/Auth/Admin/AdminLogin";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Auth */}
      <Route path="/adminsignup" element={<SignUp />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
    </Routes>
  );
};

export default App;
