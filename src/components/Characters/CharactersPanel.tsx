import { Grid, Button, Typography, Paper } from "@mui/material";
import { useEffect, FC, useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import useCharacterStore from "../../store/characterStore";
import { Character, CharacterPanel } from "../../types/types";
import { Box } from "@mui/system";
import { style } from "./stylesCharactersPanel";

const CharactersPanel: FC<CharacterPanel> = ({ panelType }) => {
  const panelResults = useCharacterStore((state) =>
    panelType === "leftPanel" ? state.leftResults : state.rightResults
  );
  const { fetchCharacters, selectCharacter } = useCharacterStore(
    (state) => state
  );
  const count = useCharacterStore((state) => state.count);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCharacter, setSelectedCharacter] = useState({} as Character);

  useEffect(() => {
    fetchCharacters(panelType, currentPage);
  }, [currentPage]);

  const handleSelect = (character: Character) => {
    selectCharacter(panelType, character);
    setSelectedCharacter(character);
  };
  return (
    <>
      <Paper sx={style.panel_box}>
        <Typography variant="h4">
          Character #{panelType === "leftPanel" ? "1" : "2"}
          {""}
          {selectedCharacter.name ? ` - ${selectedCharacter.name}` : ""}
        </Typography>
        <Grid container spacing={2} sx={style.grid_container}>
          {panelResults?.map((character: Character, index: number) => (
            <Grid item key={index}>
              <CharacterCard
                character={character}
                handleSelect={handleSelect}
                selected={selectedCharacter.id === character.id}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={style.content_buttons}>
          <Button
            variant="contained"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            sx={style.button}
          >
            Prev
          </Button>
          <Button
            variant="contained"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage * 6 >= count}
            sx={style.button}
          >
            Next
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default CharactersPanel;
