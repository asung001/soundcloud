import React, { createContext, useContext, useState, ReactNode } from 'react';
import data from '../utils/tracks';
import { ITrack } from '../types/TrackType';

interface TracksContextType {
  tracks: ITrack[];
  likeUnlike: (id: number) => void;
  togglePlay: (id: number) => void;
  formatArtist: (artists: string[]) => string
}

const TracksContext = createContext<TracksContextType | undefined>(undefined);

export const TracksProvider = ({ children }: { children: ReactNode }) => {
  const [tracks, setTracks] = useState<ITrack[]>(data);

  const likeUnlike = (id: number) => {
    setTracks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, like: !t.like } : t
      )
    );
  };

  const togglePlay = (id: number) => {
    setTracks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, play: !t.play } : t
      )
    );
  };

  const formatArtist = (artists: string[]): string => {
    if (artists.length === 0) return '';
    if (artists.length === 1) return artists[0].toUpperCase();
    return artists.map(a => a.toUpperCase()).join(' & ');
  };

  return (
    <TracksContext.Provider value={{ tracks, likeUnlike, togglePlay, formatArtist }}>
      {children}
    </TracksContext.Provider>
  );
};

export const useTracks = () => {
  const context = useContext(TracksContext);
  if (!context) {
    throw new Error('useTracks must be used within TracksProvider');
  }
  return context;
};