
class Card{
    constructor(id, name, cost, hp, atk){
        this.id = `card_${id}`
        this.name = name
        this.cost = cost
        this.hp = hp
        this.atk = atk

    }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function init_deck(deck){

    deck.push(new Card(0,"Ant-Man", 1, 1, 2));
    deck.push(new Card(1,"Black Panther", 4, 5, 3));
    deck.push(new Card(2,"Black Widow", 2, 2, 1));
    deck.push(new Card(3,"Captain America", 5, 4, 4));
    deck.push(new Card(4,"Captain Marvel", 8, 7, 5));
    deck.push(new Card(5,"Doctor Strange", 5, 6, 2));
    deck.push(new Card(6,"Hawkeye", 1, 1, 2));
    deck.push(new Card(7,"Heimdal", 3, 3, 3));
    deck.push(new Card(8,"Iron Man", 5, 5, 3));
    deck.push(new Card(9,"Loki", 4, 5, 2));
    deck.push(new Card(10,"Nebula", 2, 2, 3));
    deck.push(new Card(11,"Nick Fury", 2, 3, 1));
    deck.push(new Card(12,"Odin", 3, 2, 4));
    deck.push(new Card(13,"Scarlet Witch", 5, 6, 3));
    deck.push(new Card(14,"Spider-Man", 4, 3, 6));
    deck.push(new Card(15,"Star-Lord", 1, 1, 3));
    deck.push(new Card(16,"Thanos", 10, 6, 8));
    deck.push(new Card(17,"Thor", 7, 5, 7));
    deck.push(new Card(18,"Ultron", 6, 7, 3));
    deck.push(new Card(19,"Vision", 6, 5, 5));

    console.log("deck initialized succesfully")

               
}

function resize_to_fit(text, container) {
    let fontSize = window.getComputedStyle(text).fontSize;
    text.style.fontSize = (parseFloat(fontSize) - 1) + 'px';
    
    if(text.clientHeight >= container.clientHeight){
      resize_to_fit(text, container);
    }
  }

function append_user_card(obj) {
    const hand = document.getElementById("user_1_hand");
    const card = document.createElement("div");
    card.innerHTML = ` <div class="circle">
                        <img id="curr" src="assets/currency.png" alt="cost">
                        <span id="card_cost">${obj.cost}</span>
            
                    </div>
                    <img id="charecter" src="assets/${obj.name}.jpeg" alt="hero">
                    <div id = ${obj.id} class="blank">
                        <span id="card_name">${obj.name}</span>
                        <br>
                        <div class="health">
                            <img id="health" src="assets/health.png" alt="health">
                            <span id="card_health">${obj.hp}</span>
                        </div>
                        <div class="atk">
                            <span id="card_atk">${obj.atk}</span>
                            <img id="atk" src="assets/atk.png" alt="atk">
                        </div>
                    </div>`


    card.classList.add("background");
    card.id = `${obj.id}`

    hand.appendChild(card)
    console.log("card appended succesfully")


}
