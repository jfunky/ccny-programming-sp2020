let strings ; //for loading the text
let rStrings=[] ; //for array of rita strings

let Sappho  ; //for joined text
let rSappho ; //for the rita object

function preload(){
	//this will be an array
	strings = loadStrings('sappho.txt');
}

function setup(){
	print(strings[0]);
	
	for (let i=0; i<strings.length; i++){
		let rs = new RiString(strings[i]);
		rStrings.push(rs);
		// print(rs);
	}
	
	let rAnalyze = rStrings[0].analyze();
	print(rAnalyze);
	
	let rWords = rStrings[0].words();
	print(rWords);
	
	let rPOS = rStrings[0].pos();
	print(rPOS);
	
	//or 
	Sappho = join(strings, "\n"); //join with a new line character
	rSappho = new RiString(Sappho);
	
}
