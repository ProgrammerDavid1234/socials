import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './context/UserContext'; // Import UserProvider at the top
import reportWebVitals from './reportWebVitals'; // Import reportWebVitals at the top

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserProvider>
      
      <App />
    </UserProvider>
  </React.StrictMode>
);

// This should also be at the top, but after rendering
reportWebVitals();
