import { create } from "zustand";
import axios from "axios";
import { CharacterStore } from "../types/types";
import { Episode } from "../types/types";
import { apiEndpoint, graphQlQuery } from "../apiEndopint/apiEndpoint";

const useCharacterStore = create<CharacterStore>()((set, get) => ({
  info: null,
  results: [],
  leftResults: [],
  rightResults: [],
  leftCharacter: null,
  rightCharacter: null,
  episodes: [],
  count: 0,
  fetchCharacters: async (panelType, currentPage) => {
    const charactersPerApi = 20;
    const charactersPerPage = 6;

    let results = get().results;
    let count = get().count;

    const currentCharacters = charactersPerPage * currentPage;
    const firstCharacters = currentCharacters - charactersPerPage;

    if (results.length < currentCharacters) {
      const currentPageApi = Math.ceil(currentCharacters / charactersPerApi);

      const postData = {
        query: graphQlQuery,
        variables: { apiPage: currentPageApi },
      };

      const { data } = await axios({
        url: apiEndpoint,
        method: "post",
        data: postData,
      });

      results = [...results, ...data.data.characters.results];
      count = data.data.characters.info.count
    }

    const sliceResult = results.slice(firstCharacters, currentCharacters);

    switch (panelType) {
      case "leftPanel":
        set({
          results,
          leftResults: [...sliceResult],
          count
        });
        break;
      case "rightPanel":
        set({
          results,
          rightResults: [...sliceResult],
          count
        });
        break;
    }
  },
  selectCharacter: async (panelType, character) => {
    if (panelType === "leftPanel") set({ leftCharacter: character });
    else set({ rightCharacter: character });

    const leftCharacter = get().leftCharacter;
    const rightCharacter = get().rightCharacter;

    if (!leftCharacter || !rightCharacter) return;
    
    const left = new Set(leftCharacter.episode.map(episode => episode.id))
    const right = new Set(rightCharacter.episode.map(episode => episode.id))

    const intersection = [...left].filter(id => right.has(id))

    const allEpisodes = [...leftCharacter.episode, ...rightCharacter.episode]
    
    set({
      episodes: intersection.map(id => allEpisodes.find(a => a.id === id) as Episode)
    })
  },
}));

export default useCharacterStore;
