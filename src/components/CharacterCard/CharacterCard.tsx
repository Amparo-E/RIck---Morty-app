import useCharacterStore from "../../store/characterStore";
import { Character } from "../../types/types";

const CharacterCard = ({ id, name, status, species, image }: Character) => {
  const { info } = useCharacterStore(
    (state) => state
  );
  return (
    <div>
        <img src={image} alt={name}/>
        <p>{id}</p>
        <h1>{name}</h1>
        <h3>{status}</h3>
        <h3>{species}</h3>
    </div>
  );
};

export default CharacterCard;
