
// const fs = require("fs");

// fs.copyFileSync("file1.txt","file2.txt");

// --- Superheroes ---
var superheroes = require("superheroes");
var supervillain = require("supervillains");

var mySuperHeroName = superheroes.random();
var mySupervillainName = supervillain.random();

console.log(mySuperHeroName);
console.log(mySupervillainName);
