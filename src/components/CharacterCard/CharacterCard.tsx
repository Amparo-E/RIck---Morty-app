import { FC } from "react";
import { Character } from "../../types/types";

interface CharacterCardProps {
  character: Character;
  handleSelect: (character: Character) => void;
}

const CharacterCard: FC<CharacterCardProps> = ({ character, handleSelect }) => {
  return (
    <div onClick={() => handleSelect(character)}>
      <img src={character.image} alt={character.name} />
      <p>{character.id}</p>
      <h1>{character.name}</h1>
      <h3>{character.status}</h3>
      <h3>{character.species}</h3>
    </div>
  );
};

export default CharacterCard;
