import React from 'react';  
import cl from './pages.module.css';
import Track from '../components/Track/Track';
import { useTracks } from '../context/TracksContext';
import { ITrack } from '../types/TrackType';

const Likes = () => {
  const { tracks, likeUnlike } = useTracks();

  return (
    <div className={cl.likes_main}>
      <div className={cl.navbar}>
        <ul className={cl.nav_list}>
          <li className={cl.nav_link}>Overview</li>
          <li className={cl.nav_link}>Likes</li>
          <li className={cl.nav_link}>Playlist</li>
          <li className={cl.nav_link}>Albums</li>
          <li className={cl.nav_link}>Stations</li>
          <li className={cl.nav_link}>Following</li>
          <li className={cl.nav_link}>History</li>
        </ul>
      </div>

      <div className={cl.likes_collection}>
        <div className={cl.likes_collection_functions}>
          <h3 style={{fontFamily: "proximanova_regular"}}>Hear the tracks you’ve liked:</h3>
          <div className={cl.likes_collection_real_functions}>
            <h4 style={{ color: '#a8a095', fontFamily: "proximanova_regular"}}>View</h4>
            <div className={cl.likes_collection_real_functions_view}>
              <div className={cl.likes_collection_real_functions_view_badges}>
                <i className="fa-solid fa-grip-vertical"></i>
              </div>
              <div className={cl.likes_collection_real_functions_view_list}>
                <i className="fa-solid fa-list-ul"></i>
              </div>
            </div>
            <input
              className={cl.likes_collection_real_functions_filter}
              type="text"
              placeholder="Filter"
            />
          </div>
        </div>

        <ul className={cl.likes_collection_list}>
          {tracks
          .filter(track => track.like)
          .map(track => (
            <Track
              key={track.id}
              track={track}
              onLikeToggle={likeUnlike} // ← ОБЯЗАТЕЛЬНО ПЕРЕДАЙ!
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Likes;
