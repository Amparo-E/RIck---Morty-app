import { create } from "zustand";
import axios from "axios";
import { CharacterStore } from "../types/types";

const apiEndpoint = "https://rickandmortyapi.com/graphql";
const graphQlQuery = `
   query($apiPage: Int) {
      characters(page: $apiPage) {
      info {
         count
      }
      results {
         id
         name
         species
         status
         image
         episode {
            id
            name
            episode
            air_date
         }  
      }   
      }
   }
`;

const useCharacterStore = create<CharacterStore>()((set, get) => ({
  info: null,
  results: [],
  leftResults: [],
  rightResults: [],
  leftCharacter: null,
  rightCharacter: null,
  episodes: [],
  fetchCharacters: async (panelType, currentPage) => {
    const charactersPerApi = 20;
    const charactersPerPage = 6;

    let results = get().results;

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
    }

    const sliceResult = results.slice(firstCharacters, currentCharacters);

    switch (panelType) {
      case "leftPanel":
        set({
          results,
          leftResults: [...sliceResult],
        });
        break;
      case "rightPanel":
        set({
          results,
          rightResults: [...sliceResult],
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
  },
}));

export default useCharacterStore;
