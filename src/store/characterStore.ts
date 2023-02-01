import { create } from "zustand";
import axios from "axios";
import { CharacterStore } from "../types/types";

const useCharacterStore = create<CharacterStore>()((set, get) => ({
  info: null,
  results: [],
  leftResults: [],
  rightResults: [],
  fetchCharacters: async (panelType, postPerPage) => {
    let { data } = await axios(`https://rickandmortyapi.com/api/character`);
    
    switch(panelType) {
      case 'leftPanel':
         set((state) => ({
            results: [...state.results, ...data.results],
            leftResults: [...data.results],
         }))
         break;
      case 'rightPanel': 
         set((state) => ({
            results: [...state.results, ...data.results],
            rightResults: [...data.results],
         }))
         break;
    }
  }
}));

export default useCharacterStore;
