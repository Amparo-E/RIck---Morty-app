import { useState } from "react";
import CharactersPanel from "../../components/Characters/CharactersPanel";

const HomePage = () => {
  const [isLeftOrRight, setIsLeftOrRight] = useState<boolean>(true);

  return (
    <div style={{ display: "flex", justifyContent: 'space-Between' }}>
      <CharactersPanel panelType={"leftPanel"} />
      <CharactersPanel panelType={"rightPanel"} />
    </div>
  );
};

export default HomePage;
