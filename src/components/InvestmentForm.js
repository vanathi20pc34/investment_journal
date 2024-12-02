import React, { useState } from "react";
import { fetchAIInsights } from "../api";
import { logInvestmentDecision } from "../firestore";
import '../investment.css';
const InvestmentForm = () => {
  const [investmentDetails, setInvestmentDetails] = useState({
    symbol: "",
    decision: "",
    amount: "",
    reasoning: "",
  });

  const [aiResponse, setAIResponse] = useState(""); // To display AI insights
  const [logMessage, setLogMessage] = useState(""); // To display Firestore log result

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvestmentDetails({ ...investmentDetails, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Log investment decision to Firestore
      const logResult = await logInvestmentDecision(investmentDetails);
      setLogMessage(logResult);

      // Fetch AI Insights (optional, based on your API setup)
      const insights = await fetchAIInsights(investmentDetails);
      setAIResponse(insights);
    } catch (error) {
      console.error("Error in submission:", error);
      setLogMessage("Error logging decision. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Stock Symbol:
          <input
            type="text"
            name="symbol"
            value={investmentDetails.symbol}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Buy/Sell Decision:
          <select
            name="decision"
            value={investmentDetails.decision}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </select>
        </label>
        <br />
        <label>
          Amount Invested:
          <input
            type="number"
            name="amount"
            value={investmentDetails.amount}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Reasoning:
          <textarea
            name="reasoning"
            value={investmentDetails.reasoning}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Log Message:</h3>
        <p>{logMessage}</p>

        <h3>AI Insights:</h3>
        <p>{aiResponse || "No insights yet."}</p>
      </div>
    </div>
  );
};

export default InvestmentForm;
