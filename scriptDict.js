const dictionary = [];

function saveWord() {
  //preia cuvântul introdus de utilizator
  let word = document.getElementById("word").value;

  //adaugă cuvântul în dicționar daca acesta nu exista deja
  for(let i = 0; i < dictionary.length; ++i) {
    if(dictionary[i] === word) {
      alert("Acest cuvant a fost introdus deja! Introdu alt cuvant!")
      document.getElementById("word").value = "";
      return;
    }
  }
  dictionary.push(word);

  // șterge textul introdus de utilizator din formular
  document.getElementById("word").value = "";

  // afișează cuvântul în interiorul box-ului
  let wordBox = document.getElementById("word-box");
  wordBox.innerHTML += "<p>" + word + "</p>";
}

function searchWord() {
  // preia cuvântul introdus de utilizator
  let search = document.getElementById("search").value;

  // verifică dacă cuvântul se află în dicționar si afiseaza un mesaj corespunzator
  let index = dictionary.indexOf(search);
  if (index >= 0) {
    document.getElementById("result").innerHTML += "<p>" + search + " se află în dicționar." + "</p>";
  } else {
    document.getElementById("result").innerHTML += "<p>" +  search + " nu se află în dicționar." + "</p>";
  }
  
  // șterge textul introdus de utilizator din formular
  document.getElementById("search").value = "";
}
