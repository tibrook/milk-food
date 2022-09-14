import React from "react";
import Aliment from "./Aliment";
import { aliments } from "../data/aliments.js";

import { useState, useEffect } from "react";

const TableauAliment = ({ inputSearch }) => {
  const [searchAliments, setSearchAliments] = useState([]);
  useEffect(() => {
    let alimentData = [];
    if (inputSearch) {
      for (let i = 0; i < aliments.length; i++) {
        console.log(aliments.length);
        if (
          aliments[i].nom.toUpperCase().includes(`${inputSearch.toUpperCase()}`)
        ) {
          // console.log("te");
          alimentData.push(aliments[i]);
        } else {
        }
      }
      setSearchAliments(alimentData);
    }
  }, [inputSearch]);

  console.log(inputSearch);
  return (
    <div className="tableau-container">
      {!inputSearch
        ? aliments.map((aliment) => (
            <Aliment aliment={aliment} key={aliment.id} />
          ))
        : searchAliments.map((aliment) => (
            <Aliment aliment={aliment} key={aliment.id} />
          ))}
    </div>
  );
};

export default TableauAliment;
