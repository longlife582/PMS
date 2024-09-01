import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/login';  // Ensure the path is correct
import SignUp from './pages/signUp';  // Ensure the path is correct
import HomePage from './pages/Home'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<SignUp />} />  {/* Default route if no other paths match */}
        <Route path='/home' element = {<HomePage/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
