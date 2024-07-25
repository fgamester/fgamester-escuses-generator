//declarando las listas de los elementos necesarios
let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

//funcion que genera un numero aleatorio para seleccionar un index al azar de cada elemento
function generateNumber(anArray) {
  let num = Math.floor(Math.random() * anArray.length);
  return num;
}

//funcion que concatena cada elemento para formar la excusa
function generateAnExcuse(array1, array2, array3, array4) {
  let newExcuse = "";
  newExcuse = newExcuse.concat(
    array1[generateNumber(array1)],
    " ",
    array2[generateNumber(array2)],
    " ",
    array3[generateNumber(array3)],
    " ",
    array4[generateNumber(array4)]
  );
  return newExcuse;
}

/* funcion que reemplaza el parrafo #excuse por la nueva excusa generada,
investigando durante un buen tiempo descubrí que anteponiendo "window." me permitía poder acceder a la función directamente sin necesidad de agregar la función en html*/
window.loaded = () => {
  document.getElementById("excuse").innerHTML = generateAnExcuse(
    who,
    action,
    what,
    when
  );
};
