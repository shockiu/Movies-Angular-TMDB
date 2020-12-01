export interface MoviePlayingNow {
    total_pages:   number;
    results:       Movies[];
    page:          number;
    dates:         Dates;
    total_results: number;
}

export interface Dates {
    minimum: Date;
    maximum: Date;
}

export interface Movies {
    video:             boolean;
    vote_average:      number;
    popularity:        number;
    overview:          string;
    release_date:      Date;
    adult:             boolean;
    backdrop_path:     string;
    id:                number;
    genre_ids:         number[];
    vote_count:        number;
    title:             string;
    original_title:    string;
    poster_path:       string;
    original_language: string;
}
