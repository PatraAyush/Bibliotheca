import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Provider from './components/ui/Provider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <Router>
        <App />
      </Router>
    </Provider>  
  </StrictMode>
);