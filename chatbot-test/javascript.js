// document.getElementById("input").addEventListener("keydown", (e) => {
//   if (e.code === "Enter") {
//     let input = inputField.value;
//     inputField.value = "";
//     output(input);
//   }
// });

const utterances = [ 
    ["hvordan går det", "har du det bra", "hvordan står det til"],        //Spørsmål om tilværelse
    ["hei", "hey", "hallo", "god morgen", "god dag", "god kveld", "yo"],      //Hilsener
    ["hva gjør du på", "hva skjer", "what is up"],      //Spørsmål om hva som gjøres
    ["hvor gammel er du?"],					//3
    ["hvem er du", "hva er navnet ditt", "hva heter du"],   //Spørsmål om identitet
];
   
  // Possible responses corresponding to triggers
   
  const answers = [
     [
      "Greit... Hva med deg?",
      "Ganske bra!",
      "Fantastisk! Hvordan går det med deg?"
    ],                                                                                  	//0
    [
      "Hallo!", "Hei!", "Hey!", "Heisann!", "Howdy"
    ],						//1
    [
      "Ikke noe spesielt",
      "Skal legge meg",
      "Tipp",
      "Ærlig talt, vet ikke helt"
    ],						//2
    ["alder_placeholder"],					//3
    ["navn_placeholder"],	//4
  ];
   
  // For any other user input
   
  const alternatives = [
    "ok...",
  ];

document.onkeydown = function (e) {
    if (e.key === "Enter") {
        let input = document.getElementById("input").value;
        document.getElementById("input").value = "";
        output(input);
    }
}
function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(utterances, answers, text)) {
    // Search for exact match in triggers
    product = compare(utterances, answers, text);
  } 
  else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  addChatEntry(input, product);
}

function compare(utterancesArray, answersArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        let replies = answersArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

function addChatEntry(input, product) {
  const messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = "Skriver...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    botText.innerText = `${product}`;
  }, 1200);
}
