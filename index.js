function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then((resp) => resp.json())
    .then((bookData) => renderBooks(bookData));
      /*console.log(books);
      let number = 5;
      let bookName = findBookName(books, number);
      console.log(bookName);
      number = 10;
      findCharacter(books, number)
        .then(characterName => {

          console.log("I was promised a character name ");
          console.log(characterName);
        });*/
}

/*
function findCharacter(books, characterNumber){
  for (let index in books){
    const book = books[index];
    //console.log("Book " + index + ": " + book.name);
    //console.log(`Book ${index} has ${book.characters.length} characters`);
    
    if (book.characters.length > characterNumber){
      let request = book.characters[characterNumber];

      let promiseMeAResponse = fetch(request);
      let promiseMeSomeJson = promiseMeAResponse.then(r => r.json());
      let promiseMeACharacterName = promiseMeSomeJson.then(characterData => { 

        console.log("Reading a character name from Json ");
        console.log(characterData.name);
        return characterData.name;
      });


      console.log("Promising a character later ");
      return promiseMeACharacterName;


      return fetch(request)
        .then((resp) => resp.json())
        .then(function (character){
          console.log(character.name);
          return character.name;
        });
    }
  }
}

function findBookName(books, input){
  return books[input-1].name;
}

fetchBooks();
*/

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
