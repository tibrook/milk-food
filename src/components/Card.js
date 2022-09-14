import React from "react";

const Card = () => {
  return (
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
      <span className="spanEvolution">Évolution de : Milkrot</span>
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
            Ce pokémon est l'un des plus gloutons. Tout ce qui passe devant son
            chemin sera dévoré.
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
            <br /> Du Bernard L'hermite au tigre de Chine méridoniale, aucun des
            êtres humains n'a su résister à son effroyable coup frontal
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
  );
};

export default Card;
