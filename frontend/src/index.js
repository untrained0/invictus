import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthProvider>
<<<<<<< HEAD
); 

=======
);
>>>>>>> 76b5ce1656032e71afc6bb567109ef4468df77f1
