// src/firestore.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

// Function to log decision
export const logInvestmentDecision = async (decision) => {
  try {
    const docRef = await addDoc(collection(db, "investment-decisions"), decision);
    console.log("Decision logged with ID:", docRef.id);
    return "Decision logged successfully.";
  } catch (error) {
    console.error("Error logging decision:", error);
    return "Error logging decision. Please try again.";
  }
};
