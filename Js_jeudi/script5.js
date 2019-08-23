const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];



//Est-ce que tous les livres ont été au moins empruntés une fois ?
var borrow = function(){
  console.log("Question : Est-ce que tous les livres ont été au moins empruntés une fois ?")
   var isBorrowed;
  for (var i = 0; i < books.length; i++){
    if (books[i].rented == 0){
      isBorrowed = false
      break
    }
    else{
      isBorrowed = true
    }
  }
  console.log(isBorrowed)
  
}

//decommente la ligne suivant pour executer
//borrow()

//Quel est livre le plus emprunté ?

var moreBorrowed = function(){
console.log("Question : Quel est livre le plus emprunté ?")
var  isMoreBorrowed = []
  for (var i = 0; i < books.length; i++){
    isMoreBorrowed.push(books[i].rented)
  }
  isMoreBorrowed.sort()
  for (var i = 0; i < books.length; i++){
    if (isMoreBorrowed[isMoreBorrowed.length - 1] == books[i].rented) {
      console.log("==> " + books[i].title)
    }
  }
}
//decommente la ligne suivant pour executer
//moreBorrowed()


//Quel est le livre le moins emprunté ?

var lessBorrowed = function(){
console.log("Question : Quel est livre le moins emprunté ?")
var  isLessBorrowed = []
  for (var i = 0; i < books.length; i++){
    isLessBorrowed.push(books[i].rented)
  }
  isLessBorrowed.sort()
  for (var i = 0; i < books.length; i++){
    if (isLessBorrowed[0] == books[i].rented) {
      console.log("==> " + books[i].title)
    }
  }
}

//decommente la ligne suivant pour executer
//lessBorrowed()


//Trouver le livre avec l'ID: 873495 ;

var searching = function(){
  console.log("Question : Trouver le livre avec l'ID: 873495 ?")
  for(var i = 0; i < books.length; i++){
    if (books[i].id == 873495) {
      console.log("==> "+ books[i].title + " est le livre portant l'ID n°= "+ books[i].id )
    }
  }
}
//decommente la ligne suivant pour executer
//searching()

//Supprime le livre avec l'ID: 133712 ;
//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)

var deleteBookAndSortBytitle = function(){
  var sortBooksArray = []
   console.log("Question : Supprimez le livre avec l'ID: 133712 !");
    for(var i = 0; i < books.length; i++){
      sortBooksArray.push(books[i].title)
      sortBooksArray.sort()
      if (books[i].id == 133712) {
        delete books[i]
        console.log("==> le livre portant l'id n°= 133712 a été supprimé avec succèss !" )
      }
   }
    console.log(books)

}
//decommente la ligne suivant pour executer
deleteBookAndSortBytitle()


