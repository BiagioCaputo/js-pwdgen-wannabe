// 1- Prendo lo span dall'Html

const password_complete = document.getElementById("password");
console.log(password_complete);

// 2- Creo la variabile firstName e chiedo il nome all'utente

const firstName = prompt("Come ti chiami?");
console.log(firstName);

// 3- Creo la variabile lastName e chiedo il cognome all'utente

const lastName = prompt("Qual è il tuo cognome?");
console.log(lastName);


// 4- Creo la variabile color e chiedo il colore preferito dell'utente

const color = prompt("Qual è il tuo colore preferito?");
console.log(color);

// 5- Variabile fissa 23

const password_final = "23"
console.log(password_final)


// 6- Unisco i dati nella variabile password completa

const password_total = firstName + lastName + color + password_final;

// 7- Pubblico la password nell'html

password_complete.innerText = password_total;