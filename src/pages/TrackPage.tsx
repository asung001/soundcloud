import React, { useEffect, useState } from 'react'
import { useTracks } from '../context/TracksContext'
import { ITrack } from '../types/TrackType'
import { Link, useParams } from 'react-router-dom'
import cl from './pages.module.css'
import RLC from '../assets/images/RLS.jpg'

const TrackPage = () => {
const { tracks, formatArtist } = useTracks();
  const { id } = useParams<{ id: string }>();
  const [currentTrack, setCurrentTrack] = useState<ITrack | undefined>(undefined);

  useEffect(() => {
    if (!id) return;

    const trackId = Number(id);
    const track = tracks.find(t => t.id === trackId);

    setCurrentTrack(track);
  }, [id, tracks]);

  if (!currentTrack) {
    return <div>Трек не найден</div>;
  }


  return (
    <div className={cl.track_id_all_info_block}>
        <div className={cl.track_id_main_info_block}>
            <div className={cl.track_id_main_info_artist_name_play_btn}>
                <div className={cl.track_id_main_info_play_btn}>
                    <i style={{fontSize: "30px", marginLeft: "4px"}} className="fa-solid fa-play"></i> 
                </div>

                <div className={cl.track_id_main_info_artist_track_name}>
                    <div className={cl.track_id_main_info_track_name}>
                        <h2 className={cl.track_id_main_info_track_name_text}>{currentTrack.title}</h2>
                    </div>
                    <div className={cl.track_id_main_info_artist}>
                        <h3 className={cl.track_id_main_info_artist_text}>{formatArtist(currentTrack.artists)}</h3>
                    </div>
                </div>
            </div>

            <img className={cl.track_id_main_info_image} src={RLC} alt="" />
            <div className={cl.track_track_wave}>TRACK WAVE</div>
        </div>

        <div className={cl.track_info_option_and_comments}>
            <div className={cl.track_info_option_and_mini_info}>
                <div className={cl.track_info_option}>
                    <div className={cl.track_info_option_item}><i className="fa-solid fa-heart"></i></div>
                    <div className={cl.track_info_option_item}><i className="fa-solid fa-code-compare"></i></div>
                    <div className={cl.track_info_option_item}><i className="fa-solid fa-share-nodes"></i></div>
                    <div className={cl.track_info_option_item}><i className="fa-solid fa-copy"></i></div>
                    <div className={cl.track_info_option_item}><i className=""></i>Add</div>
                    <div className={cl.track_info_option_item}><i className="fa-solid fa-ellipsis"></i></div>
                </div>

                <div className={cl.track_info_mini_info}>
                    <div className={cl.track_mini_info_item}><i style={{color: "#a8a095", fontSize: "11px", marginRight: "6px"}} className='fa-solid fa-play'></i>{currentTrack.play_count}</div>
                    <div className={cl.track_mini_info_item}><i style={{color: "#a8a095", fontSize: "11px", marginRight: "6px"}} className="fa-solid fa-heart"></i>{currentTrack.likes_count}</div>
                    <div className={cl.track_mini_info_item}><i style={{color: "#a8a095", fontSize: "11px", marginRight: "6px"}} className="fa-solid fa-code-compare"></i>{currentTrack.reposts_count}</div>
                </div>
            </div>

            <div className={cl.track_comments_and_release_date_and_artist_mini_profile}>
                <div className={cl.track__release_date}>
                    <p>Release date:</p>
                    <p>7 November 2025</p><br />
                    <p>Explicit</p><br /><br />
                <div style={{fontSize: "18px"}} className={cl.track_comments_countbr}>{currentTrack.comments.length} comments</div>
                </div>
                <div className={cl.track_mini_profile}>
                    <img src={RLC} alt="IMG" />
                    <Link to={`/${currentTrack.artist_link}`}><h4>{currentTrack.artists[0]}</h4></Link>
                    <div style={{marginTop: "-5px"}}>
                        <p><i className="fa-solid fa-user"></i>7,826</p>
                        <p style={{marginLeft: "12px"}}><i className="fa-solid fa-wave-square"></i>526</p>
                    </div>
                    <div style={{background: "#242729"}}>Following</div>
                    <div>Report</div>
                </div>
                <ul className={cl.track_comments}>
                    {currentTrack.comments.map(com => 
                        <li className={cl.track_comment}>
                            <img src={RLC} className={cl.track_comment_author_image}></img>
                            <div className={cl.track_comment_author_body}>
                                <div className={cl.track_comment_author}>{com.author}</div>
                                <div className={cl.track_comment_body}><p>{com.text}</p></div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default TrackPage
