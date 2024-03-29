import "./Character.css";
import { useState } from "react";

const Character = ({ character }) => {

  const [rotate, setRotate] = useState(false)

  return (
    <div>

      <img
        className={rotate ? "rotate" : ""}
        src={character.image}
        alt={character.name}
        onClick={() => setRotate(!rotate)} />

    </div>
  )
}
export default Character