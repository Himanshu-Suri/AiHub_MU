import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  return (
    <div className="relative min-h-screen bg-black font-mono overflow-hidden">
      <Navbar />
      <Hero />
      <Form />
    </div>
  );
}

export default App;