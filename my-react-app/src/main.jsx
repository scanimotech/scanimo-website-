import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import Contact_us from "./components/Contact_us.jsx";
import OurTeam from './components/OurTeam.jsx';
import Vedio from './components/Vedio.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <Footer1 /> */}
      <App />  
      {/* <Vedio /> */}
    {/* <OurTeam /> */}
    {/* <Contact_us /> */}
    
  </React.StrictMode>
);