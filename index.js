// Blackjack
// SIMPLE GAME

// Find code for that accounts for a single deck of cards.  Reshuffles the deck after each turn.
// How to account for user and AI both getting cards.


// Your Code Here

async function shuffleDeck() {

    let response = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    let gameDeck = await response.json()

    // books.forEach(renderBook)
    console.log(gameDeck)
}


// function renderBook(book) {
//     let root = document.querySelector('#root')

//     let li = document.createElement('li')
//     li.textContent = book.title

//     let quantityInput = document.createElement('input')
//     quantityInput.value = book.quantity

//     let saveButton = document.createElement('button')
//     saveButton.textContent = 'Save'

//     saveButton.addEventListener('click', () => {
//         fetch('http://localhost:3001/updateBook', {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 id: book.id,
//                 quantity: quantityInput.value
//             })
//         })
//     })

//     li.append(quantityInput, saveButton)

//     root.append(li)
// }


shuffleDeck();

// Once you have cards, how to account for keeping them 21 and under or for the AI winning if they have 21 and under, but above yours.

// TALLY HOW MANY TIMES PERSON HAS WON.  
// LOCAL STORAGE and how to implement in the game.  Way to clear your cookies?