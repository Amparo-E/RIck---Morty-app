import { useEffect, FC, useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import useCharacterStore from "../../store/characterStore";
import { Character, CharacterPanel } from "../../types/types";

const CharactersPanel: FC<CharacterPanel> = ({ panelType }) => {
  const panelResults = useCharacterStore((state) =>
    panelType === "leftPanel" ? state.leftResults : state.rightResults
  );
  const { fetchCharacters, selectCharacter } = useCharacterStore(
    (state) => state
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetchCharacters(panelType, currentPage);
  }, [currentPage]);

  const handleSelect = (character: Character) => {
    selectCharacter(panelType, character);
  };
  return (
    <>
      <div>
        {panelResults?.map((character: Character, index: number) => (
          <CharacterCard
            key={index}
            character={character}
            handleSelect={handleSelect}
          />
        ))}
        <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    </>
  );
};

export default CharactersPanel;
