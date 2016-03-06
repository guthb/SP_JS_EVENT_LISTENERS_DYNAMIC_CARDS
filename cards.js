// When the user enters in text into the text area and then clicks the create button, 
//create a new card element in the DOM. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, 
//should then be removed from the DOM. Not just made invisible, actually 
//removed from the DOM.

//define varibles to be used:
//varibles for holding text enterened, the card add button, the div for the holding 
//the card and a count for the cards
//
var textEntered = document.getElementById("inputText");
var newCardButton = document.getElementById("createButton");
var cardHolder = document.getElementById("cardHolder");
var cardCount = 0;

//buld a fuction that adds a card to the <div>
var cardAddtionToDom = function(){
  //populate varible to hold text
  var cardText = textEntered.value;

  //perform error checking and if entered correctly enter a card and delete
  //button into the div card placeholder and increment the card count 
  if (cardText === "") {
    alert("Please Enter Some Text For Your Card")
    
    } else {
        var cardStringToDom = "<section class='card' id='card" + 
          cardCount + "''> <p>" + cardText + 
          "</p> <button id='delete'>Delete</button></section>"
        cardHolder.innerHTML += cardStringToDom;
        cardCount ++;
    };
};

//call function on click of button
newCardButton.addEventListener("click", cardAddtionToDom)

//build a function that deletes a card from the <div>
var cardDeletionFromDom = function(event){
    console.log("event", event);
    if (event.target.id === "delete") {
        locationOfChild = event.target.parentNode;
        cardHolder.removeChild(locationOfChild);
    }
    
};

//call function on click of delete button
cardHolder.addEventListener("click", cardDeletionFromDom);





