import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import TableauAliment from "./TableauAliment";
const Header = () => {
  return (
    <div className="container">
      <div className="card-milk">
        <div className="header-card">
          <span className="rarete">Légendaire</span>
          <h1>Milka</h1>
          <div className="pv-content">
            <span className="pv-text">PV</span>
            <span className="pv-value">590</span>
            <img src="./assets/card_carac.png" alt="caractéristique milka" />
          </div>
        </div>
        <div className="evolution">
          <img src="./assets/milk_evolution.png" alt="Evolution de Milka" />
        </div>
        <span className="spanEvolution">Evolution de : Milkrot</span>
        <img
          src="./assets/milkgrognon.jpg"
          alt="milka grognon"
          className="pokemon_img"
        ></img>
        <p className="img_infos">
          N°2 Pokémon Grotesque Taille : 20cm Poids : 44.65kg
        </p>

        <div className="attaque">
          <div className="header-attaque">
            <img
              src="./assets/elem1.png"
              alt="element 1"
              className="element-img"
            />
            <img
              src="./assets/elem2.png"
              alt="element 1"
              className="element-img"
            />

            <h4 className="name-attaque">Bouftout</h4>
            <span className="value-attaque">65</span>
          </div>
          <div className="content-attaque">
            <p>
              Ce pokémon est l'un des plus gloutons. Tout ce qui passe devant
              son chemin sera dévoré.
              <br />8 enfants, 4 chiens et 3 chats reposent désormais dans son
              estomac.
              <br />
              Paix à leux âme.
            </p>
          </div>
        </div>
        <div className="attaque">
          <div className="header-attaque">
            <img
              src="./assets/elem4.png"
              alt="element 1"
              className="element-img"
            />
            <img
              src="./assets/elem2.png"
              alt="element 1"
              className="element-img"
            />
            <img
              src="./assets/elem3.png"
              alt="element 1"
              className="element-img"
            />
            <h4 className="name-attaque">Coup D'Boul</h4>
            <span className="value-attaque">87</span>
          </div>
          <div className="content-attaque">
            <p>
              Attaque dévastatrice qui en a défiguré plus d'un.
              <br /> Du Bernard L'hermite au tigre de Chine méridoniale, aucun
              des mammifères n'a su résister à son effroyable coup frontal
            </p>
          </div>
        </div>
        <div className="infos-card">
          <h3>Caractéristiques :</h3> <h3>Infos complémentaires : </h3>
          <ul>
            <li>Grognon</li>
            <li>Affectueux</li>
            <li>Bruyant</li>
          </ul>
          <span>
            Offrez lui une carotte, vous êtes son nouveau propriétaire !
          </span>
        </div>
      </div>
      <header>
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
          <div className="besoins">
            <h2>Les besoins</h2>
            <ul>
              <li>Foin à volonté</li>
              <li>Eau fraîche à volonté</li>
              <li>Granules 1 fois / jour</li>
            </ul>
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
                  {/* <img src="./assets/carotte.png" alt="carotte" /> */}
                  <span className="emoji">🥕</span>
                  <span className="hover-alim">Feuilles de carottes</span>
                </div>
                <div className="aliment">
                  {/* <img src="./assets/carotte.png" alt="carotte" /> */}
                  <span className="emoji">☘️</span>
                  <span className="hover-alim">Trèfle</span>
                </div>
                <div className="aliment">
                  {/* <img src="./assets/carotte.png" alt="carotte" /> */}
                  <span className="emoji">💐</span>
                  <span className="hover-alim">Pisselit</span>
                </div>
                <div className="aliment">
                  {/* <img src="./assets/carotte.png" alt="carotte" /> */}
                  <span className="emoji">🥬</span>
                  <span className="hover-alim">Laitue</span>
                </div>
                <div className="aliment">
                  {/* <img src="./assets/carotte.png" alt="carotte" /> */}
                  <img
                    src="./assets/endives.png"
                    className="emoji"
                    alt="endives"
                  />
                  <span className="hover-alim">Endives</span>
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
                  {/* <img src="./assets/carotte.png" alt="carotte" /> */}
                  <span className="emoji">🥕</span>
                  <span className="hover-alim">Carottes</span>
                </div>
                <div className="aliment">
                  {/* <img src="./assets/carotte.png" alt="carotte" /> */}
                  <span className="emoji">🌱</span>
                  <span className="hover-alim">
                    Graines (avoine, blé, céréales, etc.)
                  </span>
                </div>
                <div className="aliment">
                  {/* <img src="./assets/carotte.png" alt="carotte" /> */}
                  <span className="emoji">🥖</span>
                  <span className="hover-alim">Pain</span>
                </div>
                <div className="aliment">
                  {/* <img src="./assets/carotte.png" alt="carotte" /> */}
                  <span className="emoji">🌽</span>
                  <span className="hover-alim">Mais</span>
                </div>
                <div className="aliment">
                  {/* <img src="./assets/carotte.png" alt="carotte" /> */}
                  <span className="emoji">🍫</span>
                  <span className="hover-alim">Chocolat</span>
                </div>
              </div>{" "}
            </div>
          </div>
          <button className="btn-three">Générer un repas</button>
          <div className="search-container">
            <h2>Un doute sur un aliment ? </h2>

            <input
              type="text"
              className="saisie-aliment"
              placeholder="banane"
            ></input>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="loop" />
            <TableauAliment />
          </div>
        </main>
      </header>
    </div>
  );
};

export default Header;
