import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";
import TableauAliment from "../components/TableauAliment";
import { useState } from "react";
import FormGenerate from "../components/FormGenerate";
import { aliments } from "../data/aliments";
const Home = () => {
  const [search, setSearch] = useState("");
  const [generateRepas, setGenerateRepas] = useState(false);
  const [alimentsVolonte, setAlimentsVolonte] = useState([]);
  const formGenerate = () => {
    setGenerateRepas(true);
    let alimentData = [];

    for (let i = 0; i < aliments.length; i++) {
      if (aliments[i].volonte) {
        // aliments[i].id = i++;
        alimentData.push(aliments[i]);
      } else {
      }
    }
    setAlimentsVolonte(alimentData);
  };
  return (
    <div className="container">
      <Card />
      <section>
        <div className="logo-container">
          <img src="./assets/carotte.png" alt="carotte" className="carotte " />
          <img
            src="./assets/carotte.png"
            alt="carotte"
            className="carotte carotte2"
          />

          <img
            src="./assets/carotte.png"
            alt="carotte"
            className="carotte carotte3"
          />

          <img src="./assets/6.png" alt="le milk" className="logo logo1" />
          <img src="./assets/5.png" alt="le milk" className="logo logo2" />
          <img src="./assets/4.png" alt="le milk" className="logo logo3" />
          <img src="./assets/3.png" alt="le milk" className="logo logo4" />
          <img src="./assets/2.png" alt="le milk" className="logo logo5" />
          <img src="./assets/1.png" alt="le milk" className="logo logo6" />
        </div>
        <main>
          <div className="besoins-container">
            <div className="besoins">
              <h2>Les besoins</h2>
              <ul>
                <li>Foin à volonté</li>
                <li>Eau fraîche à volonté</li>
                <li>Granules 1 fois / jour (1 poignée)</li>
              </ul>
            </div>
            <div className="button-container">
              {generateRepas ? (
                <FormGenerate alimentsVolonte={alimentsVolonte} />
              ) : (
                <button className="generer-repas" onClick={formGenerate}>
                  Générer un repas
                </button>
              )}
            </div>
          </div>

          <div className="preferences">
            <div className="aime">
              <h2>Ce qu'il préfère</h2>
              <img
                src="./assets/milk-fouin.jpg"
                alt="Le dalleux de Milka"
                className="logoBouftout"
              ></img>
              <div className="logo-aliments-preferes">
                <div className="aliment">
                  <span className="emoji">🥕</span>
                  <span className="hover-alim">Feuilles de carottes</span>
                </div>
                <div className="aliment">
                  <span className="emoji">☘️</span>
                  <span className="hover-alim">Trèfle</span>
                </div>
                <div className="aliment">
                  <span className="emoji">💐</span>
                  <span className="hover-alim">Pisselit</span>
                </div>
                <div className="aliment">
                  <span className="emoji">🥬</span>
                  <span className="hover-alim">Laitue</span>
                </div>
              </div>
            </div>
            <div className="deteste">
              {" "}
              <h2>Aliments à éviter</h2>
              <img
                src="./assets/mort.gif"
                alt="La mort de milka"
                className="logoBouftout"
              ></img>
              <div className="logo-aliments-preferes">
                <div className="aliment">
                  <span className="emoji">🌱</span>
                  <span className="hover-alim">
                    Graines (avoine, blé, céréales, etc.)
                  </span>
                </div>
                <div className="aliment">
                  <span className="emoji">🥖</span>
                  <span className="hover-alim">Pain</span>
                </div>
                <div className="aliment">
                  <span className="emoji">🌽</span>
                  <span className="hover-alim">Mais</span>
                </div>
                <div className="aliment">
                  <span className="emoji">🍫</span>
                  <span className="hover-alim">Chocolat</span>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="background-change">
            <div className="search-container">
              <h2>Un doute sur un aliment ? </h2>

              <input
                type="text"
                className="saisie-aliment"
                placeholder="banane"
                id="search-input"
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="loop" />
              <TableauAliment inputSearch={search} />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Home;
