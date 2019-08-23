// factorielle
var facto = prompt("De quel nombre veut tu calculer la factorielle ?")
var factorielle = function(facto){
	var numberFacto = 1;
	for( var i = 1; i <= facto ;i++){
			numberFacto = i * numberFacto ;
	};
	console.log("factorielle de " + facto + " est egale a " + numberFacto);
}

factorielle(facto)

