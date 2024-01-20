import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import HomePage from './pages/HomePage';
// import YtVideos from './pages/YtVideos';
import Dashboard from './pages/user/Layout';
import Private from './components/Routes/Private';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Private />}>
        <Route path='user' element={<Dashboard />} />
      </Route>
      <Route path='/dashboard' element={<AdminRoute />}>
        <Route path='admin' element={<AdminDashboard />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
      {/* <Route path='/yt' element={<YtVideos />} /> */}
    </Routes>
    </>
  );
}

export default App;
