import { useEffect, FC, useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import Pagination from "../Pagination/Pagination";
import useCharacterStore from "../../store/characterStore";
import { Character, panelType, CharacterPanel } from "../../types/types";

const CharactersPanel: FC<CharacterPanel> = ({ panelType }) => {
  const panelResults = useCharacterStore((state) =>
    panelType === "leftPanel" ? state.leftResults : state.rightResults
  );
  const { fetchCharacters } = useCharacterStore((state) => state);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postPerPage: number = 6;


  useEffect(() => {
    fetchCharacters(panelType, postPerPage);
  }, []);

  return (
    <>
      <div>
        {panelResults?.map(
          ({ id, name, status, species, image }: Character, index: number) => (
            <CharacterCard
              key={index}
              id={id}
              name={name}
              status={status}
              species={species}
              image={image}
            />
          )
        )}
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button> 
      </div>
    </>
  );
};

export default CharactersPanel;
