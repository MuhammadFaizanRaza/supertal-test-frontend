import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
import { Login, Register, Users } from './pages';

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='users' element={<Users />} />
        <Route path='/' element={<Navigate to='/login' replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRoutes;
