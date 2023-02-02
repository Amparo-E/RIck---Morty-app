import { Paper, Typography } from "@mui/material";
import { FC } from "react";
import { Episode } from "../../types/types";
import { style } from "./styleEpisodesPanel";

interface EpisodePanelProps {
  title: string;
  episodes: Episode[] | undefined;
}

const EpisodePanel: FC<EpisodePanelProps> = ({ title, episodes }) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Paper elevation={4} sx={style.panel_box}>
        {episodes !== undefined && episodes.length ? (
          episodes.map((episode, index) => (
            <Typography key={index}>
              {episode.episode} - {episode.name} - {episode.air_date}
            </Typography>
          ))
        ) : (
          <Typography>There's nothing to match!</Typography>
        )}
      </Paper>
    </>
  );
};

export default EpisodePanel;
