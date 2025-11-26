interface IComment {
    author: string,
    text: string,
}

export interface ITrack {
    title: string,
    artists: string[],
    id: number,
    duration: string,
    genre: string,
    comments: IComment[],
    play_count: number,
    link: string,
    play: boolean,
    like: boolean,
    tags: string[]
    artist_link: string,
    likes_count: number,
    reposts_count: number,

}