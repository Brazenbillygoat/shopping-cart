import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "./providers/theme-provider";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Candy from "./pages/Candy";
import Refrigerated from "./pages/Refrigerated";
import Frozen from "./pages/Frozen";
import Spicy from "./pages/Spicy";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Candy" element={<Candy />} />
        <Route path="/Refrigerated" element={<Refrigerated />} />
        <Route path="/Frozen" element={<Frozen />} />
        <Route path="/Spicy" element={<Spicy />} />
      </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
