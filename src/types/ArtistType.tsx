import { IAlbum } from "./AlbumType";
import { ITrack } from "./TrackType";

export interface IArtist {
    id: string,
    nickname: string,
    tracks: ITrack[],
    albums: IAlbum[],
    link: string,
}