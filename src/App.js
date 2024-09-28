import React from 'react';
import './App.css';
import URLHandler from './URLHandler';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Redirector() {
  const { encoded } = useParams();

  if (encoded) {
    try {
      const decodedUrl = atob(encoded);
      window.location.href = decodedUrl;
    } catch (error) {
      console.error("Failed to decode URL:", error);
      return <p>Error: Failed to decode URL.</p>;
    }
  }

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>URL Encoder and Redirector</p>
          <URLHandler />
          <Routes>
            {/* Updated route to capture 'encoded' as a part of the path */}
            <Route path="/redirect/:encoded" element={<Redirector />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
