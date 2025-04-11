import { GoogleGenAI } from "@google/genai";
import { GEMINIAI_KEY } from "./constants";

const ai = new GoogleGenAI({ apiKey: GEMINIAI_KEY });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// main();

export default ai;