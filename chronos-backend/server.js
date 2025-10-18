import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const GEMINI_MODEL = "gemini-2.5-flash";
const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;
async function searchPerplexity(query) {
  try {
    const response = await axios.post(
      "https://api.perplexity.ai/search",
      { query },
      {
        headers: {
          "Authorization": `Bearer ${PERPLEXITY_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data?.results?.map((r) => r.url) || [];
  } catch (err) {
    console.error("Perplexity API Error:", err.response?.data || err.message);
    return [];
  }
}
app.post("/api/reconstruct", async (req, res) => {
  const { text } = req.body;
  try {
    const searchResults = await searchPerplexity(text);
    const prompt = `You are an AI assistant that reconstructs digital text fragments. Your task is to:

1. Expand abbreviations and internet slang to their full meanings
2. Provide cultural/historical context where relevant
3. Maintain a clear, structured output format

Fragment to reconstruct:
"${text}"

Available context sources:
${searchResults.join("\n")}

Format your response EXACTLY as follows:

[Original Fragment]
> "${text}"

[AI-Reconstructed Text]
> [Provide the expanded version here, replacing slang/abbreviations with their full meanings while maintaining the original tone and flow]

[Contextual Sources]
${searchResults.length > 0 ? searchResults.map(url => `* ${url}`).join("\n") : "* No sources available"}

Important:
- Keep the reconstructed text natural and readable
- Explain cultural references (like MySpace's "Top 8") in context
- Use the provided sources when relevant`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/${GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: prompt }] }] },
      { headers: { "Content-Type": "application/json" } }
    );
    const reconstructedText =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini.";
    res.json({ output: reconstructedText });
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).json({
      error: "Failed to reconstruct fragment",
      details: error.response?.data?.error || error.message,
    });
  }
});
app.listen(5000, () => console.log("Server running on port 5000"));
