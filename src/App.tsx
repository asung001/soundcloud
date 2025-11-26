import React, { useState } from 'react';
import './App.css';
import Likes from './pages/Likes';
import Header from './components/Header/Header';
import { TracksProvider } from './context/TracksContext';
import { ITrack } from './types/TrackType';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
            

function App() {
  const [currentTrack, setCurrentTrack] = useState<ITrack | null>(null);

  return (
    <TracksProvider>
          <div className="App">
            <BrowserRouter>
              <Header currentTrack={currentTrack} />
              <AppRouter />
            </BrowserRouter>
          </div>
      </TracksProvider>
  );
}

export default App;
