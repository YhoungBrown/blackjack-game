let cardarray = []
let isAlive = false
let hasBlackjack = false
let sum = 0
let message = ""
let player = {
    name: "Yhoung Brown",
    chips: "$" + 770
}

let Cards = document.getElementById("cards")
let Summary = document.getElementById("summary")
let intro = document.getElementById("intro")
let user = document.getElementById("user")

user.textContent = player.name + " : " + player.chips

function startGame(){
    isAlive = true
    let firstCard = Random()
    let secondCard = Random()
    cardarray = [firstCard, secondCard]
    //Cards.textContent = cardarray
    sum = firstCard + secondCard
    Summary.textContent = "Sum : " + sum
    console.log(cardarray)
    console.log(sum)
    playGame() 
}

function playGame(){
    Cards.textContent = "Cards :"
    for(let i = 0; i < cardarray.length; i++){
        Cards.textContent += " " + cardarray[i] + " "
    }
    if (sum < 21){
        message = "Do you want a new card?"
    }
    else if(sum === 21){
        message = "Congrats! you've blackedJack"
        hasBlackjack = true
    }
    else {
        message = "you're Out of the game"
        isAlive = false
    }

    intro.textContent = message
    console.log(message)
}

function newCard(){
    if (isAlive === true && hasBlackjack === false){
    let otherCard = Random()
    cardarray.push(otherCard)
    console.log(cardarray)
    sum += otherCard
    Summary.textContent = "Sum : " + sum
    playGame()
    }
}

function Random(){
    let randomCard = Math.floor(Math.random()*13) + 1
    if (randomCard === 1){
        return 11
    }
    else if(randomCard > 10){
        return 10
    }
    else{
        return randomCard
    }
}