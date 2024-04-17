import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BottomNav from './components/ui/BottomNav';
import AccountAddModal from './components/modals/AccountAddModal';
import ScheduleAddModal from './components/modals/ScheduleAddModal';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Routes>
    <Route path="/ocr" element={<App />} />
  </Routes>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
