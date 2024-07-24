let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying"];

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

function generateNumber(anArray) {
  let num = Math.floor(Math.random() * anArray.length);
  return num;
}

window, addEventListener("load", loaded());

const loaded = () => {document.getElementById("excuse").innerHTML = generateAnExcuse(who, action, what, when);};
