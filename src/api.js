import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const fetchAIInsights = async (investmentDetails) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat-completions',
      {
        model: 'gpt-4',
        prompt: generatePrompt(investmentDetails),
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error details:', error.response?.data || error.message);
    return 'Error fetching insights. Please try again later.';
  }
};

const generatePrompt = (investmentDetails) => {
  return `
    Based on the investment decision:
    Stock Symbol: ${investmentDetails.symbol || 'N/A'}
    Buy/Sell Decision: ${investmentDetails.decision || 'N/A'}
    Amount Invested: ${investmentDetails.amount || 'N/A'}
    Reasoning: ${investmentDetails.reasoning || 'N/A'}
    Please provide insights about the market sentiment and possible suggestions for portfolio diversification.
  `;
};
