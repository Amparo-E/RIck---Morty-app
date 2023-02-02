export interface CharacterStore {
  info: Info | null;
  results: Character[];
  leftResults: Character[];
  rightResults: Character[];
  leftCharacter: Character | null;
  rightCharacter: Character | null;
  episodes: Episode[];
  count: number,
  fetchCharacters: (panelType: string, currentPage: number) => void;
  selectCharacter: (panelType: string, character: Character) => void;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Character {
  id: string;
  name: string;
  species: string;
  status: string;
  image: string;
  episode: Episode[];
}

export interface Episode {
  id: string;
  name: string;
  episode: string;
  air_date: string;
}

export interface Location {
  name: string;
  url: string;
}

export type panelType = "leftPanel" | "rightPanel";

export interface CharacterPanel {
  panelType: panelType;
}
