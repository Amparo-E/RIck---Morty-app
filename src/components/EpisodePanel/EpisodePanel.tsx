import { FC } from "react";
import { Episode } from "../../types/types";

interface EpisodePanelProps {
  episodes: Episode[] | undefined;
}

const EpisodePanel: FC<EpisodePanelProps> = ({ episodes }) => {
  return (
    <div>
      {episodes?.map((episode) => (
        <p>{episode.name}</p>
      ))}
    </div>
  );
};

export default EpisodePanel;
