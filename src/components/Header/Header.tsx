import React, { useState } from 'react';
import cl from './Header.module.css';
import { useTracks } from '../../context/TracksContext';
import { ITrack } from '../../types/TrackType';
import RLC from '../../assets/images/RLS.jpg'
import AllPageHelper from '../AllPageHelper/AllPageHelper';
import { Link } from 'react-router-dom';

interface HeaderProps {
  currentTrack: ITrack | null;
}

const Header = ({ currentTrack }: HeaderProps) => {
  const { tracks, likeUnlike, formatArtist } = useTracks();
  const [search, setSearch] = useState('');
  const [searchActive, setSearchActive] = useState<boolean>(false)

  const activeTrackSearch = () => {
    setSearchActive(prev => !prev)
  }

  const deActiveTrackSearch = () => {
    setSearchActive(false)
  }

  const filteredTracks = tracks.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase()) ||
    t.artists.some(a => a.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
    <div className={cl.header}>
      <div className={cl.header_content}>
        <div className={cl.header_navbar}>Logo</div>
        <Link to={"home"}><div className={cl.header_navbar}>Home</div></Link>
        <Link to={"feed"}><div className={cl.header_navbar}>Feed</div></Link>
        <Link to={"likes"}><div className={cl.header_navbar}>Library</div></Link>
        <input 
          onClick={activeTrackSearch} 
          className={cl.seacrhTrackInput}  
          value={search} 
          onChange={e => setSearch(e.target.value)} 
          placeholder="Search" 
        />
        <Link to={"upgrade"}><div className={cl.header_navbar}>Upgrade now</div></Link>
        <Link to={"for_artist"}><div className={cl.header_navbar}>For Artists</div></Link>
        <Link to={"upload"}><div className={cl.header_navbar}>Upload</div></Link>
        <Link to={"user"}><div className={cl.header_navbar}>User</div></Link>
        <div className={cl.header_navbar}>mes</div>
        <div className={cl.header_navbar}>mail</div>
        <div className={cl.header_navbar}>more</div>

        {searchActive && <div className={cl.search_block}>
          {filteredTracks.map(t => (
            <div className={cl.searchTitle} key={t.id}>
              <img  className={cl.searchedTrackImage} src={RLC} alt="" />
              <div className={cl.searchedTrackPlaybtn}>
                  <i className="fa-solid fa-play"></i> 
                </div>
              <div className={cl.searchedTrackInfo}>
                <p style={{color: "#a8a095", fontSize: '13px'}}>{formatArtist(t.artists)}</p>
                <p>{t.title}</p>
              </div>

              <div className={cl.searchTrackOption}>
                <div onClick={e => { e.stopPropagation(); likeUnlike(t.id)}} className={cl.searchTrackOption_item}>
                  <i
                      data-type="like"
                      className="fa-solid fa-heart"
                      style={{ color: t.like ? "#ff661a" : "#fff"}}>
                  </i>
                </div>

                {/* <div className={cl.searchTrackOption_item}>
                  <i className="fa-solid fa-code-compare"></i>
                </div>

                <div className={cl.searchTrackOption_item}>
                  <i className="fa-solid fa-share-nodes"></i>
                </div>

                <div className={cl.searchTrackOption_item}>
                  <i className="fa-solid fa-copy" />
                </div>
                <div className={cl.searchTrackOption_item}>
                  <i className="fa-solid fa-ellipsis" />
                </div> */}
              </div>
            </div>
          ))}
              {search.length && !filteredTracks.length && <div>Ничего не найдено</div>}
      </div> 
      }
      </div>
    </div>
    {searchActive && <AllPageHelper deActiveTrackSearch={deActiveTrackSearch}></AllPageHelper>}
    </>
  );
};

export default Header;