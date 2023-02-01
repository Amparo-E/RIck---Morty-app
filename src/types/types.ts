export interface CharacterStore {
    info: Info | null,
    results: Character[],
    leftResults: Character[],
    rightResults: Character[],
    fetchCharacters: (panelType: string, postPerPage: number) => void;
    // fetchNext: (somthing: any) => void
    // clear: () => void;
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}

export interface Character {
    id?:       number;
    name?:     string;
    status?:   string;
    species?:  string;
    type?:     string;
    gender?:   string;
    origin?:   Location;
    location?: Location;
    image?:    string;
    episode?:  string[];
    url?:      string;
    created?:  Date;
}

export interface Location {
    name: string;
    url:  string;
}

export type panelType = 'leftPanel' | 'rightPanel'

export interface CharacterPanel {
    panelType: panelType,
}