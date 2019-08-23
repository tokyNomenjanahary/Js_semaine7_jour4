var floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
var pyramid = function(floor){
var	space = "";
var	mark = "#";
tab = [];
		for (var i = 0; i < floor; i++) {
			tab.push(space)
			space += " "
		}
		for(var index = 0; index < floor ;){
			console.log(tab[floor - 1] + mark)
			mark += "#"
			floor -= 1
		}
}
pyramid(floor)

