import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { relative } from "path";
import { FC, useState } from "react";
import { Character } from "../../types/types";
import { style } from "./stylesCharacterCard";

interface CharacterCardProps {
  character: Character;
  handleSelect: (character: Character) => void;
  selected: boolean;
}

const CharacterCard: FC<CharacterCardProps> = ({
  character,
  handleSelect,
  selected,
}) => {
  return (
    <>
      <Box
        sx={{
          ...style.content_box,
          border: selected ? "1px solid #2f9331" : "",
        }}
        onClick={() => handleSelect(character)}
      >
        <img
          src={character.image}
          style={{
            height: "auto",
            width: "12em",
            borderRadius: "50%",
            position: "absolute",
            left: "1em",
            bottom: "5em",
          }}
        />
        <Box sx={style.status_box}>
          <Box
            sx={{
              ...style.status,
              background: character.status === "Alive"
                  ? "#8bcf21"
                  : character.status === "unknown"
                  ? "#fff874"
                  : "#e64358",
            }}
          ></Box>
          <Typography>{character.status}</Typography>
        </Box>
        <Box sx={style.info_box}>
          <Typography variant="h5" noWrap>{character.name}</Typography>
          <Typography>{character.species}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default CharacterCard;
