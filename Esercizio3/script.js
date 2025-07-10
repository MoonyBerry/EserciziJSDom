const ul = document.querySelector("ul");
const input = document.querySelector("input");

input.setAttribute("placeholder", "Cosa vuoi aggiungere?");

//creazione funzione sul click
function addProduct() {
  const li = document.createElement("li");

  const toDo = input.value;

  if (toDo === "") return;

  //creo la checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  //modifico il testo di li e aggiungo la checkbox
  li.innerText = toDo;
  li.prepend(checkbox);

  //aggiungo li alla lista
  ul.appendChild(li);
}
