import { Character } from "./Character";

export interface Film {
    title: string,
    director: string,
    release_date: string,
    url: string,
    opening_crawl: string,
    producer: string,
    characters: string[],
}
