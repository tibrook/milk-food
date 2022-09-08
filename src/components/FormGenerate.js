import React, { useEffect, useState } from "react";
import { aliments } from "../data/aliments";
import CheckboxAliment from "./CheckboxAliment";

const FormGenerate = ({ alimentsVolonte }) => {
  let idRecette = [];
  let response = {};

  console.log(alimentsVolonte);
  const [isGenerated, setIsGenerated] = useState(false);
  const [contentGenerated, setContentGenerated] = useState("");
  const launchGenerate = (e) => {
    e.preventDefault();
    const alimentsSelectionnes = window.localStorage.alimentsVolonte
      ? window.localStorage.alimentsVolonte.split(",")
      : [];
    if (alimentsSelectionnes.length === 0) {
      alert("Il faut sélectionner au moins un aliment");
    } else {
      for (let i = 0; i < 5; i++) {
        idRecette.push(Math.floor(Math.random() * alimentsSelectionnes.length));
      }
      setIsGenerated(true);
      for (let i = 0; i < idRecette.length; i++) {
        response.push(`${idRecette[i]}`);
      }
      console.log(response);
      setContentGenerated(response);
      console.log(contentGenerated);
    }
  };

  return (
    <div className="container-recette">
      <form action="" className={isGenerated ? "hidden" : "form"}>
        <h2>Sélectionnez les aliments dont vous disposez</h2>
        {alimentsVolonte.map((aliment) => (
          <CheckboxAliment key={aliment.id} aliment={aliment} />
        ))}
        <button className="generateMeal" onClick={(e) => launchGenerate(e)}>
          {" "}
          Générer le repas !
        </button>
      </form>
      <div className={!isGenerated ? "hidden" : "recette"}>
        <ul>
          {contentGenerated.map((aliment) => (
            <li key={contentGenerated.id}>{contentGenerated}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormGenerate;
