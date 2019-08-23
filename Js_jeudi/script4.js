const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;

var birth = function(){
  var birthArray = []
  for( var i = 0; i < entrepreneurs.length; i++){
    if ( entrepreneurs[i].year < 1980 && entrepreneurs[i].year > 1969 ) {
      birthArray.push(entrepreneurs[i])
    }
  }
  console.log(birthArray)
}
// decommente la ligne suivant pour executer
 //birth()



// une array qui contient le prénom et le nom des entrepreneurs ;

var about = function(){
  var aboutArray = []
  for(var i = 0; i < entrepreneurs.length; i++){
    aboutArray.push({first: entrepreneurs[i].first, last: entrepreneurs[i].last})
  }
  console.log(aboutArray.first)
}
// decommente la ligne suivant pour executer
// about()


//Quel âge aurait chaque inventeur aujourd'hui ?

var contractorYear = function(){

  for(var i = 0; i < entrepreneurs.length; i++){
    var  contractorYearToday = 2019 - entrepreneurs[i].year
    console.log("En ce moment, " + entrepreneurs[i].first +" "+ entrepreneurs[i].last + " a "+ contractorYearToday + " ans")
  }
} 

// decommente la ligne suivant pour executer
// contractorYear()


//Trie les entrepreneurs par ordre alphabétique du nom de famille

var sort = function(){
  var sortArrayOfLast = []
  for(var i = 0; i < entrepreneurs.length; i++){
   sortArrayOfLast.push(entrepreneurs[i].last)
  }
  console.log(sortArrayOfLast.sort())
}

// decommente la ligne suivant pour executer
//sort()
