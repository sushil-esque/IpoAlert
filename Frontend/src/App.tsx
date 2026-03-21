import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <main className="container mx-auto">
          <Hero/>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
