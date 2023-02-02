import { Box, Grid, Typography } from "@mui/material";
import CharactersPanel from "../../components/Characters/CharactersPanel";
import EpisodePanel from "../../components/EpisodePanel/EpisodePanel";
import useCharacterStore from "../../store/characterStore";
import { style } from "./stylesHomePage";

const HomePage = () => {
  const episodes = useCharacterStore((state) => state.episodes);
  const leftCharacterEpisodes = useCharacterStore(
    (state) => state.leftCharacter?.episode
  );
  const rightCharacterEpisodes = useCharacterStore(
    (state) => state.rightCharacter?.episode
  );

  return (
    <Box>
      <Box sx={style.landing_box}>
        <Box sx={style.info_box}>
          <Typography variant="h4" sx={style.title}>
          Rick and Morty have been sending characters to different episodes through the portals, help us find them...
          </Typography>
          <a
            href="#characters"
            style={{
              textDecoration: "none",
              fontSize: "30px",
              background: "#2f9331",
              padding: "7px",
              color: "#fff",
              borderRadius: '6px',
            }}
          >
            Get started 
          </a>
        </Box>
      </Box>
      <Box id="characters" sx={style.handle_panel}>
        <Grid container>
          <Grid item md={6}>
            <CharactersPanel panelType={"leftPanel"} />
          </Grid>
          <Grid item md={6}>
            <CharactersPanel panelType={"rightPanel"} />
          </Grid>
        </Grid>

        <Grid container sx={style.handle_episodes_panel}>
          <Grid item>
            <EpisodePanel
              title={"Character #1 - Only episodes"}
              episodes={leftCharacterEpisodes}
            />
          </Grid>
          <Grid item>
            <EpisodePanel
              title={"Character #1 & #2 - Shared espisodes"}
              episodes={episodes}
            />
          </Grid>
          <Grid>
            <EpisodePanel
              title={"Character #2 - Only episodes"}
              episodes={rightCharacterEpisodes}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
