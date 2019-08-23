var  proteine
var chaineTriplet = ""
var triplet = ""
var chaine = ""
var edit = function(polypeptides){
	for (var i = 0; i < polypeptides.length; i++){
		chaineTriplet += polypeptides[i]
		if ( i != 0 && i != polypeptides.length - 1  && (i + 1) % 3 == 0){
			chaineTriplet += "-"
		}
	}
	//console.log(chaineTriplet)
	return triplet
}

var transcription = function(codon){
	if ( codon == "UCU" || codon == "UCC" || codon == "UCA" || codon == "UCG" || codon == "AGU" || codon == "AGC" ){
		proteine = "Sérine"
	}
	else if (codon == "CCU" || codon == "CCC" || codon == "CCA" || codon == "CCG"){
		proteine = "Proline"
	}
	else if (codon == "UUA" || codon == "UUG"){
		proteine = "leucine"
	}
	else if (codon == "UUU" || codon == "UUC"){
		proteine = "Phénylalanine"
	}
	else if (codon == "CGU" || codon == "CGC" || codon == "CGA" || codon == "CGG" || codon == "AGG" || codon == "AGA"){
		proteine = "Arginine"
	}
	else if (codon == "UAU" || codon == "UAC") {
		proteine = "Tyrosine"
	}
	else{
		console.log("aucun proteine correspondant a cette codon !");
	}
	//CCGUCGUUGCGCUACAGC
}
var polypeptide = ["CCGUCGUUGCGCUACAGC" , "CCUCGCCGGUACUUCUCG"]
for (var a = 0; a < polypeptide.length; a++){
		polypeptides = polypeptide[a]
		console.log("Question : Transcrire l' "+ polypeptides +" en proteine !");
		edit(polypeptides)
		triplet = chaineTriplet.split('-')
	for (var i = 0; i < triplet.length; i++){
		transcription(triplet[i])
		if ( i == 0 ) {	
			chaine = chaine + proteine
		}else{
			chaine = chaine + "-" + proteine
		}
		
	}
		console.log(chaine)
		break
}


//var polypeptide = "CCGUCGUUGCGCUACAGC"
//






/*
CCG-UCG-UUG-CGC-UAC-AGC

CCU-CGC-CGG-UAC-UUC-UCG
*/

/*

for (var i = 0; i < polypeptide.length; i++){
	transcription(polypeptide2[i]);
	chaine = chaine + "-" + proteine
}

console.log("Question : Transcrire l' ARN CCU-CGC-CGG-UAC-UUC-UCG en proteine !");
console.log("==> " + chaine);
*/

//var polypeptide2 = ["CCUCGCCGGUACUUCUCG"]

