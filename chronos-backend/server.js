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
  
    return response.data?.results?.map(r => r.url) || [];
  } catch (err) {
    console.error("Perplexity API Error:", err.response?.data || err.message);
    return [];
  }
}

app.post("/api/reconstruct", async (req, res) => {
  const { text } = req.body;

  try {
   
    const searchResults = await searchPerplexity(text);

    const prompt = `Reconstruct this digital fragment using the context of these web sources:\n\nFragment:\n${text}\n\nSources:\n${searchResults.join("\n")}`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/${GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      { headers: { "Content-Type": "application/json" } }
    );

    const reconstructedText =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini.";

    let formattedOutput = `[Original Fragment]\n${text}\n\n[AI-Reconstructed Text]\n${reconstructedText}\n\n[Contextual Sources]`;
    searchResults.forEach((url, i) => {
      formattedOutput += `\n${i + 1}. ${url}`;
    });

    res.json({ output: formattedOutput });
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).json({
      error: "Failed to reconstruct fragment",
      details: error.response?.data?.error || error.message,
    });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
