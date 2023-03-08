import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/Displaydifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import s from "./style.module.css";

function App() {
  const [currentDiff, setCurrentDiff] = useState("");

  function onMenuListItemsClick(difficulty) {
    setCurrentDiff(difficulty);
  }

  return (    
    <div>
      <h1> Select your difficulty level</h1>
      <div className={s.workspace}>
       <MenuList onItemClick={onMenuListItemsClick} />
       <DisplayDifficulty difficulty={currentDiff} />
       </div>
    </div>
  );
}

export default App;
