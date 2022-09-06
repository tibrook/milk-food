import React, { useEffect } from "react";
import colors from "../style/_settings.scss";
import { useState } from "react";
const Aliment = ({ aliment }) => {
  const [color, setColor] = useState();

  useEffect(() => {
    if (aliment.autorise) {
      setColor(colors.green1);
    } else {
      setColor(colors.red1);
    }
  }, [aliment]);
  return (
    <div
      className={aliment.infos.length > 0 ? "card hover" : "card"}
      style={{ background: color }}
    >
      <img src={aliment.imageUrl} alt={aliment.name} />
      <span className="aliment-name">{aliment.nom}</span>
      <span className="aliment-autorise">{aliment.autorise}</span>
      <span className="infos">{aliment.infos && aliment.infos}</span>
    </div>
  );
};

export default Aliment;
