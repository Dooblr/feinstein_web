import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss"; // Adjust the stylesheet path as needed
import Home from "./components/Home"; // Adjust path if necessary
import Portfolio from "./components/Portfolio/Portfolio"; // Import Portfolio
import ProjectPageTemplate from "./components/Portfolio/ProjectPageTemplate"; // Import ProjectPageTemplate

const App: React.FC = () => {
  return (
    <>
      {/* Load Google Fonts */}
      <GoogleFontLoader
        fonts={[
          { font: "Roboto", weights: [400, 700] }, // Header font
          { font: "Merriweather", weights: [400, 700] }, // Body font
        ]}
        subsets={["latin"]}
      />
      <Router>
        <div className="App">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* Portfolio Route */}
            <Route path="/portfolio" element={<Portfolio />} />

            {/* Dynamic Project Details Route */}
            <Route path="/portfolio/:projectId" element={<ProjectPageTemplate />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
