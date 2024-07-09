/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function aleatorio(lista) {
    let numAleatorio = Math.floor(Math.random() * lista.length);
    return lista[numAleatorio] + " ";
  }

  //who + action + what + when

  let who = [
    "The dog",
    "My grandma",
    "The mailman",
    "My bird",
    "goku super saiyajin fase dios"
  ];
  let action = ["ate", "peed", "crushed", "broke", "ella es callaita"];
  let what = [
    "my homework",
    "my phone",
    "the car",
    "wisin y yandel los extraterrestres"
  ];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  console.log("Hello Rigo from the console!");
  console.log(
    aleatorio(who) + aleatorio(action) + aleatorio(what) + aleatorio(when)
  );
};
