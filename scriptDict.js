const dictionary = [];

function saveWord() {
  //get the word from the user
  let word = document.getElementById("word").value;

  //add the word if it does not exist
  for(let i = 0; i < dictionary.length; ++i) {
    if(dictionary[i] === word) {
      alert("Acest cuvant a fost introdus deja! Introdu alt cuvant!")
      document.getElementById("word").value = "";
      return;
    }
  }
  dictionary.push(word);

  //reset the user input
  document.getElementById("word").value = "";

  //display the word within the box
  let wordBox = document.getElementById("word-box");
  wordBox.innerHTML += "<p>" + word + "</p>";
}

function searchWord() {
  // get the word from the user
  let searchWord = document.getElementById("search").value;

  // check if the word exists and if so display a message
  let index = -1;
  for (let i = 0; i < dictionary.length; i++) {
    if(dictionary[i] === searchWord) {
      index = i;
      break;
    }
  }
  if (index >= 0) {
    alert(searchWord + " exists in the dictionary");
  } else {
    alert(searchWord + " does not exist in the dictionary");
  }
  
  //reset the user input
  document.getElementById("search").value = "";
}
