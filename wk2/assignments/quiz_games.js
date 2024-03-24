// Description:
// You may opt to use this assignment as the springboard for week 3’s assignment. In this week, we will prepare the content for the quiz game.

// Create an array objects that represent a question and answer. The object should include a question property ("question" as the key and the actual question as the value) and an answer property ("answer" as the key with the actual answer as the value).
    const quizItems = [
        {
            question: "what is the answer to the ultimate question of life, the universe and everything?",
            answer: "42",
        },
        {
            question: "if time is an illusion, what is doubly so?",
            answer: "lunchtime",
        },
        {
            question: "what day could arthur never get the hang of?",
            answer: "thursday",
        },
        {
            question: "fill in the blank: anyone who is capable of getting themselves made _______ should on no account be allowed to do the job",
            answer: "president",
        }
    ]
    // A random question prompt should appear when the page loads. The question prompt should include the value of the question. The user will respond with their guess.
    // const yourQuestion = window.prompt();
    const randomItemSelector = Math.floor(Math.random() * quizItems.length)
    console.log(randomItemSelector);
    const quizPrompt = window.prompt(quizItems[randomItemSelector].question);

    // Do not check the answer yet. Just fire an alert combining "You answered " and then the response and then add " The correct answer was " and then display the answer property from the object. Use concatenation to string all these strings together.
    const quizFeedback = window.alert("you answered " + quizPrompt + " & the correct answer was " + quizItems[randomItemSelector].answer);

/*
    // Prompt the user with a message like "I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game"
    const yourGameDescription = window.prompt("I have " + faveGames.length + " games in my collection. Pick a number between 1 and 3 and I'll tell you about that game.");
    // Cast the prompt to a number (if possible)
        // "cast"????
    // Using the plus sign as a concatenation operator, alert the user to your game. "You selected" + myGameArray[promptResponse -1 ].title + " which is a " + myGameArray[promptResponse - 1].type + " of game..." And so forth.
    const gamePicked = (yourGameDescription - 1);

    console.log("You selected " + faveGames[gamePicked].name + " which is a " + faveGames[gamePicked].type + " with " + faveGames[gamePicked].playerCount + " players, where the object is to " + faveGames[gamePicked].objective)
    // Add your exercise files to your git repo and commit your changes. Push to github. Upload to your MCAD hosting and share a link to that url in this discussion. Ensure that URL is accessible and functional.
*/