// Description:
// You are going to combine your knowledge of arrays with your knowledge of objects to create a (drum-roll please) array of objects! 🎉

// Steps:
    // Create an array with your favorite games as objects inside of the array. Each game object will represent one game.
    // Each object will have the same properties. I recommend title, type, numberOfPlayers, rating, shortDescription. Please note, the naming convention of object properties is camelCase.
    // You must have 3 or more games in the collection

    const faveGames = [
        {
            name: "king's corners",
            type: "cards",
            playerCount: "3-4",
            objective: "play all the cards in your deck before all other players"
        },
        {
            name: "sorry!",
            type: "board game",
            playerCount: "4",
            objective: "reach 'home' before all other players"
        },
        {
            name: "mancala",
            type: "board game",
            playerCount: "2",
            objective: "place more beads/stones in your home receptacle than your opponent's"
        },
    ]

    // Prompt the user with a message like "I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game"
    const yourGameDescription = window.prompt("I have ", faveGames.length, "games in my collection. Pick a number between 1 and 3 and I'll tell you about that game");
    const gamePicked = (yourGameDescription-1); //I'm trying to use the 1-3 and transpose it to 0-2? for the ordering? but this doesn't feel right.
    console.log(faveGames[gamePicked].objective)
    // Cast the prompt to a number (if possible)
    // Using the plus sign as a concatenation operator, alert the user to you game. "You selected" + myGameArray[promptResponse -1 ].title + " which is a " + myGameArray[promptResponse - 1].type + " of game..." And so forth.
    // Add your exercise files to your git repo and commit your changes. Push to github. Upload to your MCAD hosting and share a link to that url in this discussion. Ensure that URL is accessible and functional.

