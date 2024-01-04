import React from "react";
import "./App.css";
import { ThemeProvider } from "./providers/theme-provider";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Candy from "./pages/Candy";
import Refrigerated from "./pages/Refrigerated";
import Frozen from "./pages/Frozen";
import Spicy from "./pages/Spicy";
import Header from "./components/Header";

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
    </div>
  );
};

export default App;
