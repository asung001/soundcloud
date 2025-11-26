import { ITrack } from "./TrackType";

export interface IAlbum {
    title: string,
    tracksAmount: ITrack[],
    artist: string,
    description: string,
    id: number,
    totalDuration: string,
    link: string,
    like: boolean,
}