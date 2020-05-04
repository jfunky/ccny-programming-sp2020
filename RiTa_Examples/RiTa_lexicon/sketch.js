//example using RiTa.js lexicon object
//display random word

let strings; //for loading the text
let rStrings = []; //for array of rita strings

let rLexicon; //for RiTa lexicon object

function setup() {
  createCanvas(windowWidth, windowHeight);

  //create Lexicon object
  rLexicon = new RiLexicon();
}

function mouseClicked() {
  background(255);
  print("clicked")
  textSize(40);
  let word = rLexicon.randomWord();
  let ww = textWidth(word);
  text(word, width/2 - ww/2, height/2);
}