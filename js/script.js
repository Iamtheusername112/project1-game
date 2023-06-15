window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const userNameDisplay = document.querySelector("#gameuser");
  const userSaveButton = document.querySelector(".save-btn");
  const userInputName = document.querySelector("#text-input");

  let game;

  // this function saves/displays the user's name on the status board;

  function saveButton() {
    userNameDisplay.innerHTML = userInputName.value;
  }

  userSaveButton.addEventListener("click", () => {
    console.log("clicked");
    saveButton();
  });

  startButton.addEventListener("click", function () {
    startGame();

    //   This function begins to count score on the point of clicking the start botton
    // let scoreCounter = 0;

    // setInterval(() => {
    //   document.getElementById("score").innerHTML = `${scoreCounter}`;
    //   //   n = n + 1;
    //   scoreCounter++;
    // }, 1000);
  });

  restartButton.addEventListener("click", function () {
    // Call the restartGame function when the button is clicked
    restartGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }

  // The function that reloads the page to start a new game
  function restartGame() {
    location.reload();
  }

  // Function that handles keydown event
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      // Update player's directionX and directionY based on the key pressed
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
      }
    }
  }

  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keydown", handleKeydown);
};
