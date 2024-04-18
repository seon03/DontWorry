import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Reset } from 'styled-reset';
//Pages
import HomePage from "./pages/HomePage";
import SortBudgetPage from "./pages/SortBudgetPage";
import StatisticPage from "./pages/StatisticPage";
import OCRPage from "./pages/OCRPage";
import ChallengePage from "./pages/ChallengePage";


function App(props) {
  return (
    <div className="App">
    <React.Fragment>
      <Reset />
        <Routes>
          <Route path= "/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/sortbudget" element={<SortBudgetPage />}/>
          <Route path="/statistics" element={<StatisticPage />}/>
          <Route path="/challenge" element={<ChallengePage />}/>
          <Route path="/ocr" element={<OCRPage/>} />
        </Routes>
    </React.Fragment>
    </div>
  );
}

export default App;
