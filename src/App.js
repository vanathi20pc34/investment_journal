import React from 'react';
import './App.css';
import InvestmentForm from "./components/InvestmentForm";

const App = () => {
  return (
    <div className="app">
      <h1>AI-Powered Investment Journal</h1>
      <InvestmentForm />
    </div>
  );
};

export default App;
