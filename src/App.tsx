import '@material-tailwind/react/tailwind.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useGlobalContext } from './Hook/Store/Store';
import About from './pages/About/About';
import Home from './pages/Home/Home';

function App() {
  const {
    state: { isAuthed },
  } = useGlobalContext();

  console.log(isAuthed, 'debug');

  return (
    <div className="bg-primary">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
