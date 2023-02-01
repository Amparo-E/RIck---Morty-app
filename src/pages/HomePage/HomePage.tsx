import CharactersPanel from "../../components/Characters/CharactersPanel";
import EpisodePanel from "../../components/EpisodePanel/EpisodePanel";
import useCharacterStore from "../../store/characterStore";

const HomePage = () => {
  const episodes = useCharacterStore((state) => state.episodes);
  const leftCharacterEpisodes = useCharacterStore(
    (state) => state.leftCharacter?.episode
  );
  const rightCharacterEpisodes = useCharacterStore(
    (state) => state.rightCharacter?.episode
  );

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-Between" }}>
        <CharactersPanel panelType={"leftPanel"} />
        <CharactersPanel panelType={"rightPanel"} />
      </div>
      <div>
        <EpisodePanel episodes={leftCharacterEpisodes} />
        <EpisodePanel episodes={episodes} />
        <EpisodePanel episodes={rightCharacterEpisodes} />
      </div>
    </>
  );
};

export default HomePage;
