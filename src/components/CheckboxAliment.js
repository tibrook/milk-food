import React, { useEffect, useState } from "react";

const CheckboxAliment = ({ aliment }) => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    window.localStorage.alimentsVolonte = [];
  }, [aliment]);

  const handleChange = async () => {
    console.log("yep");
    console.log(isChecked);
    if (!isChecked) {
      console.log("false");
      const alim =
        window.localStorage.alimentsVolonte.length > 0
          ? [window.localStorage.alimentsVolonte]
          : [];
      console.log(alim);
      console.log([aliment.id, ...alim]);
      // const resp = [aliment.id, ...alim];
      window.localStorage.alimentsVolonte = [aliment.id, ...alim];
      // window.localStorage.test = "coucou";
      setIsChecked(true);
    } else {
      let arraySuppr = {};
      const alim = window.localStorage.alimentsVolonte.split(",");
      for (let i = 0; i < alim.length; i++) {
        // console.log(parseInt(alim[i]));
        // console.log(aliment.id);
        if (parseInt(alim[i]) !== aliment.id) {
          arraySuppr.id = i;
          arraySuppr.nom = aliment.nom;
        } else {
        }
      }
      // console.log(arraySuppr);
      // window.localStorage.alimentsVolonte = [arraySuppr];
      // setIsChecked(false);
    }
    // console.log(isChecked);
    // if (isChecked) {
    //   console.log(aliment.id);
    //   const alim = window.localStorage.alimentsVolonte
    //     ? [window.localStorage.alimentsVolonte]
    //     : [];
    //   window.localStorage.alimentsVolonte = [aliment.id, ...alim];
    // } else {
    //   console.log("false");
    //   let arraySuppr = {};
    //   const alim = window.localStorage.alimentsVolonte.split(",");
    //   for (let i = 0; i < alim.length; i++) {
    //     console.log(parseInt(alim[i]));
    //     console.log(aliment.id);
    //     if (parseInt(alim[i]) !== aliment.id) {
    //       arraySuppr.id = i;
    //       arraySuppr.nom = aliment.nom;
    //     } else {
    //     }
    //   }
    //   console.log(arraySuppr);
    //   window.localStorage.alimentsVolonte = [arraySuppr];
    // }
    // if () {
    //   console.log(aliment.id);
    //   const alim = window.localStorage.alimentsVolonte
    //     ? [window.localStorage.alimentsVolonte]
    //     : [];
    //   window.localStorage.alimentsVolonte = [aliment.id, ...alim];
    // } else {
    //   console.log("false");
    //   let arraySuppr = {};
    //   const alim = window.localStorage.alimentsVolonte.split(",");
    //   for (let i = 0; i < alim.length; i++) {
    //     console.log(parseInt(alim[i]));
    //     console.log(aliment.id);
    //     if (parseInt(alim[i]) !== aliment.id) {
    //       arraySuppr.id = i;
    //       arraySuppr.nom = aliment.nom;
    //     } else {
    //     }
    //   }
    //   console.log(arraySuppr);
    //   window.localStorage.alimentsVolonte = [arraySuppr];
    // }
  };
  return (
    <div
      className={`aliments_cliquables ${isChecked ? "color-green" : null}`}
      id={aliment.id}
      onClick={handleChange}
    >
      <span>{aliment.nom}</span>
    </div>
  );
};

export default CheckboxAliment;
