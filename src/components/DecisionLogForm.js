import React, { useState } from 'react';
import { fetchAIInsights } from '../api';

const DecisionLogForm = ({ onLogDecision }) => {
  const [investment, setInvestment] = useState({
    symbol: '',
    decision: '',
    amount: '',
    reasoning: '',
  });

  const [aiInsights, setAIInsights] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvestment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onLogDecision(investment);
    const insights = await fetchAIInsights(investment);
    setAIInsights(insights);
  };

  return (
    <form onSubmit={handleSubmit} className="decision-form">
      <h2>Log Investment Decision</h2>
      <h3>Stock Symbol : </h3>
      <input 
        type="text" 
        name="symbol" 
        value={investment.symbol} 
        onChange={handleChange} 
        placeholder="Stock Symbol" 
        required 
      />
      <h3>Buy/Sell : </h3>
      <input 
        type="text" 
        name="decision" 
        value={investment.decision} 
        onChange={handleChange} 
        placeholder="Buy/Sell Decision" 
        required 
      />
      <h3>Amount Invested : </h3>
      <input 
        type="number" 
        name="amount" 
        value={investment.amount} 
        onChange={handleChange} 
        placeholder="Amount Invested" 
        required 
      />
      <h3>Reason : </h3>
      <textarea 
        name="reasoning" 
        value={investment.reasoning} 
        onChange={handleChange} 
        placeholder="Reasoning for Investment" 
        required 
      />
      <button type="submit">Log Decision</button>

      <div className="ai-insights">
        <h3>AI Insights</h3>
        <p>{aiInsights}</p>
      </div>
    </form>
  );
};

export default DecisionLogForm;

