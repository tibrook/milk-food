import React from "react";
import Aliment from "./Aliment";
import { aliments } from "../data/aliments.js";
const TableauAliment = () => {
  return (
    <div className="tableau-container">
      {aliments.map((aliment) => (
        <Aliment aliment={aliment} key={aliment.id} />
      ))}
    </div>
  );
};

export default TableauAliment;
