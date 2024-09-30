import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import Home from './components/Home'; // Adjust path if necessary
import './App.scss'; // Adjust the stylesheet path as needed

const App: React.FC = () => {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          { font: 'Roboto', weights: [400, 700] }, // Header font
          { font: 'Merriweather', weights: [400, 700] }, // Body font
        ]}
        subsets={['latin']}
      />
      <div className="App">
        <Home />
      </div>
    </>
  );
};

export default App;
