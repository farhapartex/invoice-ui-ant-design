import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'antd/dist/antd.min.css';
import './App.css';
import RootPage from './pages/RootPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
