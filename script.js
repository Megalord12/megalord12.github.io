"use strict";
console.log("start script");

function newFact(n = 42) {
  let number = document.getElementById("inputNumber");
  n = number.value;
  if (n == "value") {
    n = 42;
  }
  console.log(n, "value");
  let text = `${n}`;
  // console.log(text);
  // fetchText(n);
}

function cat() {
  newCat();
  console.log('get cat image')
}

async function fetchText(number = 42) {
  let url = `http://numbersapi.com/${number}`;
  let response = await fetch(url);
  let data = await response.text();
  console.log(data);
  let date = new Date();
  console.log(date);
}

async function newCat() {
  let url = "https://aws.random.cat/meow";
  let response = await fetch(url);
  let data = await response.text();
  let json = JSON.parse(data);
  // let myJson = await response.json();
  console.log(data, typeof data, "data");
  console.log(json["file"], typeof json);
  let newUrl = json["file"];
  // concole.log(myJson, "json");
  let catBlock = document.querySelector(".cat-image");
  catBlock.innerHTML = `<img src=${newUrl}>`;
  let date = new Date();
  console.log(date);
}

console.log("stop script");