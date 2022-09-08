import React, { useEffect } from "react";

const CheckboxAliment = ({ aliment }) => {
  useEffect(() => {
    window.localStorage.alimentsVolonte = [];
  });
  const handleChange = (e) => {
    if (e) {
      console.log(aliment.id);
      const alim = window.localStorage.alimentsVolonte
        ? [window.localStorage.alimentsVolonte]
        : [];
      window.localStorage.alimentsVolonte = [aliment.id, ...alim];
    } else {
      console.log("false");
      let arraySuppr = {};
      const alim = window.localStorage.alimentsVolonte.split(",");
      for (let i = 0; i < alim.length; i++) {
        console.log(parseInt(alim[i]));
        console.log(aliment.id);

        if (parseInt(alim[i]) !== aliment.id) {
          arraySuppr.id = i;
          arraySuppr.nom = aliment.nom;
        } else {
        }
      }
      console.log(arraySuppr);
      window.localStorage.alimentsVolonte = [arraySuppr];
    }
  };
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        id={aliment.id}
        onChange={(e) => {
          handleChange(e.target.checked);
        }}
      />
      <label htmlFor="aliment1">{aliment.nom}</label>
    </div>
  );
};

export default CheckboxAliment;
