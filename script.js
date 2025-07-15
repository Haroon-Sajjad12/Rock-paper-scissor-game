let player1Choice = null;
let player2Choice = null;

document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', () => {
    const player = button.getAttribute('data-player');
    const choice = button.getAttribute('data-choice');

    if (player === "1" && !player1Choice) {
      player1Choice = choice;
      disablePlayerButtons(1); // disable Player 1 buttons
    }

    if (player === "2" && !player2Choice) {
      player2Choice = choice;
      disablePlayerButtons(2); // disable Player 2 buttons
    }

    if (player1Choice && player2Choice) {
      document.getElementById("player1-choice").textContent = `Player 1 chose: ${capitalize(player1Choice)}`;
      document.getElementById("player2-choice").textContent = `Player 2 chose: ${capitalize(player2Choice)}`;
      document.getElementById("result").textContent = `Result: ${getResult(player1Choice, player2Choice)}`;
    }
  });
});

document.getElementById("new-round").addEventListener('click', () => {
  player1Choice = null;
  player2Choice = null;

  document.getElementById("player1-choice").textContent = "Player 1 chose: -";
  document.getElementById("player2-choice").textContent = "Player 2 chose: -";
  document.getElementById("result").textContent = "Result: -";

  enablePlayerButtons(1);
  enablePlayerButtons(2);
});

function getResult(p1, p2) {
  if (p1 === p2) return "It's a Draw!";
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 Wins!";
  }
  return "Player 2 Wins!";
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function disablePlayerButtons(playerNum) {
  document.querySelectorAll(`.choice[data-player="${playerNum}"]`).forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = 0.6;
    btn.style.cursor = "not-allowed";
  });
}

function enablePlayerButtons(playerNum) {
  document.querySelectorAll(`.choice[data-player="${playerNum}"]`).forEach(btn => {
    btn.disabled = false;
    btn.style.opacity = 1;
    btn.style.cursor = "pointer";
  });
}
