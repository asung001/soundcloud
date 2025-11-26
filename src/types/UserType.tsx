import { IArtist } from "./ArtistType";
import { ITrack } from "./TrackType";


export interface IUserType {
    likedTrakcs: ITrack[],
    follow: IArtist[],
    link: string,
}