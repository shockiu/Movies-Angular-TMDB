export interface SearchMovie {
    total_results: number;
    page:          number;
    total_pages:   number;
    results:       MoviesSearchResults[];
}

export interface MoviesSearchResults {
    vote_average:      number;
    popularity:        number;
    overview:          string;
    release_date:      string;
    title:             string;
    adult:             boolean;
    backdrop_path:     null | string;
    genre_ids:         number[];
    vote_count:        number;
    original_language: OriginalLanguage;
    original_title:    string;
    poster_path:       null | string;
    id:                number;
    video:             boolean;
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
}
