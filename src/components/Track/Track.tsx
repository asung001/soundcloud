import React, { useState } from 'react';
import cl from './Track.module.css';
import RLS from '../../assets/images/RLS.jpg';
import { ITrack } from '../../types/TrackType';
import { useTracks } from '../../context/TracksContext';
import { Link } from 'react-router-dom';

interface TrackProps {
  track: ITrack;
  onLikeToggle: (id: number) => void;
}

const Track: React.FC<TrackProps> = ({ track }) => {
  const [mouseOnTrack, setMouseOnTrack] = useState<boolean>(false);
  const [mouseOnPausePlay, setMouseOnPausePlay] = useState<boolean>(false);
  const [mouseOnOption, setMouseOnOption] = useState<{like: boolean, follow: boolean, more: boolean;}>({ like: false, follow: false, more: false });
  const [isPlay, setIsPlay] = useState<boolean>(track.play);
  const [isLikes, setIsLikes] = useState<boolean>(track.like);
  const { likeUnlike, formatArtist } = useTracks()

  const changePlayerState = () => {
    setIsPlay(prev => !prev);
  };

const handleLike = () => {
    likeUnlike(track.id);
  };

  const mouseOnTrackBtn = () => {
    setMouseOnPausePlay(prev => !prev);
  };

  const mouseOnTrackOption = (e: React.MouseEvent<HTMLElement>) => {
    const type = (e.target as HTMLElement).dataset.type;
    if (type === 'like') setMouseOnOption({ like: true, follow: false, more: false });
    if (type === 'follow') setMouseOnOption({ like: false, follow: true, more: false });
    if (type === 'more') setMouseOnOption({ like: false, follow: false, more: true });
  };

  const mouseLeaveTrackOption = () => {
    setMouseOnOption({ like: false, follow: false, more: false });
  };

  return (
      <li className={cl.likes_collection_track}>
        <div
          className={cl.likes_collection_image}
        >
        <Link to={`track/${track.id}`} className={cl.qwe} style={{ color: 'transparent' }}>
          <img
            className={cl.likes_collection_image_img}
            style={{ opacity: mouseOnTrack ? 0.75 : 1 }}
            src={RLS}
            alt="TrackImage"
          />
        </Link>
            <div className={cl.likes_collection_image_mouseOn}>
              <div
                onClick={changePlayerState}
                onMouseEnter={mouseOnTrackBtn}
                onMouseLeave={mouseOnTrackBtn}
                className={cl.likes_collection_image_mouseOn_pause_btn}
              >
                {isPlay ? (
                  <i
                    style={{
                      fontSize: '34px',
                      opacity: mouseOnPausePlay ? 0.6 : 1,
                    }}
                    className="fa-solid fa-pause"
                  />
                ) : (
                  <i
                    style={{
                      fontSize: '30px',
                      marginLeft: '5px',
                      opacity: mouseOnPausePlay ? 0.6 : 1,
                    }}
                    className="fa-solid fa-play"
                  />
                )}
              </div>

              <div className={cl.likes_collection_image_mouseOn_options}>
                <div className={cl.likes_collection_image_mouseOn_options_block}>
                  <i
                    onClick={handleLike}
                    onMouseEnter={mouseOnTrackOption}
                    onMouseLeave={mouseLeaveTrackOption}
                    data-type="like"
                    style={{
                      color: isLikes ? '#ff661a' : '#fff',
                      fontSize: '12px',
                      cursor: 'pointer',
                      opacity: !mouseOnOption.like ? 1 : 0.4,
                    }}
                    className="fa-solid fa-heart"
                    title={isLikes ? 'Unlike' : 'Like'}
                  />
                </div>

                <div className={cl.likes_collection_image_mouseOn_options_block}>
                  <i
                    onMouseEnter={mouseOnTrackOption}
                    onMouseLeave={mouseLeaveTrackOption}
                    data-type="follow"
                    style={{
                      color: '#fff',
                      fontSize: '12px',
                      cursor: 'pointer',
                      opacity: !mouseOnOption.follow ? 1 : 0.4,
                    }}
                    className="fa-solid fa-user-plus"
                    title="Follow"
                  />
                </div>

                <div className={cl.likes_collection_image_mouseOn_options_block}>
                  <i
                    onMouseEnter={mouseOnTrackOption}
                    onMouseLeave={mouseLeaveTrackOption}
                    data-type="more"
                    style={{
                      color: '#fff',
                      fontSize: '15px',
                      cursor: 'pointer',
                      opacity: !mouseOnOption.more ? 1 : 0.4,
                    }}
                    className="fa-solid fa-ellipsis"
                    title="More"
                  />
                </div>
              </div>
            </div>
        </div>

        <div className={cl.likes_collection_info}>
          <div className={cl.likes_collection_info_like_icon_and_name}>
            <i style={{ color: '#a8a095', fontSize: '14px', marginBottom: "2px" }} className="fa-solid fa-heart" />
            <Link style={{color: "transparent"}} to={`track/${track.id}`}><p className={cl.likes_collection_info_name}>{track.title}</p></Link>
          </div>
          <p style={{ color: '#a8a095' }} className={cl.likes_collection_info_artist}>
            {formatArtist(track.artists)}
          </p>
        </div>
      </li>
    
  );
};

export default Track;