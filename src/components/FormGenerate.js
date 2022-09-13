import React, { useEffect, useState } from "react";
import { aliments } from "../data/aliments";
import CheckboxAliment from "./CheckboxAliment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const FormGenerate = ({ alimentsVolonte }) => {
  let idRecette = [];
  let response = {};

  console.log(alimentsVolonte);
  const [isGenerated, setIsGenerated] = useState(false);
  const [contentGenerated, setContentGenerated] = useState([]);

  console.log(aliments);
  const genRecette = (ids) => {
    let names = [];
    for (let i = 0; i < ids.length; i++) {
      aliments.map((aliment) => {
        if (aliment.id == ids[i]) {
          names.push(aliment.nom);
        }
      });
    }
    return names;
  };
  const genWeight = (noms) => {
    let message = [];
    let recetteAlea = "";

    /* Si plus de  */
    if (noms.length >= 3) {
      for (let i = 0; i < 3; i++) {
        let nbAlea = Math.floor(Math.random() * noms.length);
        console.log(recetteAlea);
        console.log(recetteAlea.includes(noms[nbAlea]));
        if (recetteAlea.includes(noms[nbAlea])) {
          console.log("Deja présent dans le tableau, i--");
          i--;
        } else {
          console.log(noms[nbAlea].charAt(0));
          recetteAlea += `${Math.floor(
            200 / (noms.length > 3 ? 3 : noms.length)
          )} grammes d${noms[nbAlea].charAt(0) === "E" ? "'" : "e"} ${
            noms[nbAlea]
          }, `;
          message.push(
            `${Math.floor(
              200 / (noms.length > 3 ? 3 : noms.length)
            )} grammes d${noms[nbAlea].charAt(0) === "E" ? "'" : "e"} ${
              noms[nbAlea]
            } `
          );
        }
      }
    } else if (noms.length === 2) {
      for (let i = 0; i < noms.length; i++) {
        message.push(
          `${Math.floor(200 / noms.length)} grammes d${
            noms[i].charAt(0) === "E" ? "'" : "e"
          } ${noms[i]}`
        );
      }
    } else if (noms.length === 1) {
      message.push(`200 grammes de ${noms[0]}`);
    }
    return message;
  };
  const Parchemin = ({ message }) => {
    console.log(message);
    return (
      <div className="parchemin">
        <ul>
          {message &&
            message.map((ligneAliment) => (
              <li
                key={ligneAliment}
                className={"recette" + message.indexOf(ligneAliment)}
              >
                {ligneAliment}
              </li>
            ))}
        </ul>
      </div>
    );
  };
  const launchGenerate = (e) => {
    e.preventDefault();

    const alimentsSelectionnes = window.localStorage.alimentsVolonte
      ? window.localStorage.alimentsVolonte.split(",")
      : [];
    if (alimentsSelectionnes.length === 0) {
      alert("Il faut sélectionner au moins un aliment");
    } else {
      let nomsAliments = genRecette(alimentsSelectionnes);
      setContentGenerated(genWeight(nomsAliments));
      setIsGenerated(true);
      console.log(contentGenerated);
    }
  };

  return (
    <div className="container-recette">
      <form action="" className={isGenerated ? "hidden" : "form"}>
        <h2>Sélectionnez les aliments dont vous disposez</h2>
        <div className="checkbox-container">
          {alimentsVolonte.map((aliment) => (
            <CheckboxAliment key={aliment.id} aliment={aliment} />
          ))}
        </div>

        <button className="generer-repas" onClick={(e) => launchGenerate(e)}>
          {" "}
          Générer le repas !
        </button>
        <FontAwesomeIcon
          icon={faXmark}
          className="cancel-button"
          onClick={() => setIsGenerated(false)}
        />
      </form>
      <div className={!isGenerated ? "hidden" : "recette"}>
        <Parchemin message={contentGenerated} />
      </div>
    </div>
  );
};

export default FormGenerate;
