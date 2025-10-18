import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://localhost:5000/api/reconstruct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      const data = await res.json();
      setResponse(data.output);
    } catch (error) {
      setResponse("⚠️ Error connecting to backend.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono p-10 flex flex-col items-center" id="chronos">
      <h1 className="text-4xl mb-8 font-bold tracking-wider relative group">
        <span className="relative z-10">&gt; PROJECT CHRONOS</span>
        <span className="absolute inset-0 blur-sm opacity-30 text-gray-300 group-hover:opacity-50 transition-opacity">&gt; PROJECT CHRONOS</span>
      </h1>

      <form className="w-full max-w-3xl" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm tracking-wide text-gray-300">
            [INPUT_FRAGMENT]
          </label>
          <textarea
            rows={6}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="> Enter digital fragment..."
            className="w-full p-4 bg-black border-2 border-white/30 rounded-lg text-white placeholder:text-gray-600 resize-none focus:outline-none focus:border-white/60 text-lg transition-all duration-200"
          />
        </div>
        <button
          type="submit"
          className={`px-8 py-3 font-bold rounded-lg transition-all duration-200 border-2 tracking-wider ${
            loading 
              ? "bg-white/10 text-gray-400 border-white/30 cursor-not-allowed" 
              : "bg-black text-white border-white hover:bg-white hover:text-black"
          }`}
          disabled={loading}
        >
          {loading ? "[PROCESSING...]" : "[RECONSTRUCT_DATA]"}
        </button>
      </form>

      {response && (
        <div className="mt-10 w-full max-w-3xl bg-black border-2 border-white/30 rounded-lg p-6 animate-[fadeIn_0.5s_ease-in]">
          <h3 className="text-white text-xl font-semibold mb-4 tracking-wide">
            [OUTPUT_RECONSTRUCTED]:
          </h3>
          <div className="border-l-2 border-white/30 pl-4">
            <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed">{response}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;