import React from "react";

const TableauAliment = () => {
  return (
    <div className="tableau-container">
      <div className="card">
        <img src="./assets/carotte.png" alt="carottes" />
        <span className="aliment-name">Carotte</span>
        <span className="aliment-autorise">Autorisé : Oui</span>
      </div>
    </div>
  );
};

export default TableauAliment;
