var botAnswer;

var answer = function(question){
	var questionValue = question
	if ( question[question.length - 1] == "?") {
		console.log("Bot : Ouais ouais...!!");
	}else if(question == questionValue.toUpperCase()){
		console.log("Pwa, calme-toi...")
	}else if(question.indexOf("Fortnite") !== -1){
		console.log("Bot : Soum soum !!!!!");
	}else if(question == ""){
		console.log("t'es en PLS ?")
	}
	else{
		console.log("Bot : balek !");
	}
}
var question = prompt("votre question??")
answer(question)
