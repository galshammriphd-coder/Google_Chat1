
import { GoogleGenAI } from "@google/genai";
import { KNOWLEDGE_BASE } from '../constants/knowledgeBase';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getChatbotResponse = async (question: string): Promise<string> => {
  try {
    const prompt = `
      You are an expert AI assistant specializing in prompt engineering for healthcare and medical education.
      Your knowledge is strictly limited to the provided text below. You must not use any external information or prior knowledge.

      --- START OF KNOWLEDGE BASE ---
      ${KNOWLEDGE_BASE}
      --- END OF KNOWLEDGE BASE ---

      Based ONLY on the text provided in the knowledge base, answer the following user's question.
      Your answer should be helpful, concise, and directly derived from the provided documents.

      User's question: "${question}"

      If the answer cannot be found in the provided knowledge base, you MUST respond with: "I'm sorry, but I cannot find an answer to that question in the provided documents."
      Do not attempt to answer if the information is not present in the text.
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error fetching response from Gemini API:", error);
    return "I'm sorry, but I encountered an error while trying to process your request. Please try again later.";
  }
};
