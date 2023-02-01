import { useEffect, useState } from "react";
import Card from "../CharacterCard/CharacterCard";
import useCharacterStore from "../../store/characterStore";
import { Character } from "../../types/types";

const Pagination = () => {
//   const { info, fetchNext } = useCharacterStore(
//     (state) => state
//   );

const [currentPage, setCurrentPage] = useState<number>(1);
const postPerPage = 6;
const lastPostIndex = currentPage * postPerPage;
const firstPostIndex = lastPostIndex - postPerPage;

  return (
    <>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button> 
    </>
  );
};

export default Pagination; 