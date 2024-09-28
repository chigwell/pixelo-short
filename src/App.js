import React from 'react';
import './App.css';
import URLHandler from './URLHandler';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function Redirector() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const encoded = query.get('encoded');

  if (encoded) {
    try {
      const decodedUrl = atob(encoded);  // Decode the base64 URL
      window.location.href = decodedUrl; // Redirect to the decoded URL
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
            <Route path="/" element={<Redirector />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
