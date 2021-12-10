// promises
// En cours / Honorée / Rompue

// const promesse = new Promise((resolve, reject) => {
// Tâches asynchrones

// Promesse honorée : resolve()

// Promesse rompue : reject()
// });

function chargerScript(script) {
  return new Promise((resolve, reject) => {
    // créer un élément
    let element = document.createElement("script");
    element.src = script;
    document.head.append(element);

    // resolve()
    element.onload = () => resolve("Fichier " + script + " a été charger");

    // reject()
    element.onerror = () =>
      reject(new Error("Le script " + script + " n'a pu être chargé"));
  });
}

const promesse = chargerScript("test.js");
promesse.then(
  function (result) {
    console.log(result);
  },
  function (error) {
    console.log(error);
  }
);
