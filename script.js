let score = 0;
let timeLeft = 15;
let gameInterval;
let spawnInterval;

const gameArea = document.getElementById("gameArea");

const trashIcons = ["🧃", "🧴", "🍬", "🛍️", "🥤"];

function startGame() {
  score = 0;
  timeLeft = 15;
  document.getElementById("score").textContent = score;
  document.getElementById("time").textContent = timeLeft;
  gameArea.innerHTML = "";

  clearInterval(gameInterval);
  clearInterval(spawnInterval);

  gameInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      clearInterval(spawnInterval);
      endGame();
    }
  }, 1000);

  spawnInterval = setInterval(spawnTrash, 600);
}

function spawnTrash() {
  const trash = document.createElement("div");
  trash.classList.add("trash");

  // pilih icon random
  const randomIcon = trashIcons[Math.floor(Math.random() * trashIcons.length)];
  trash.textContent = randomIcon;

  // posisi random
  const x = Math.random() * (gameArea.clientWidth - 30);
  const y = Math.random() * (gameArea.clientHeight - 30);

  trash.style.left = x + "px";
  trash.style.top = y + "px";

  // klik = tambah skor
  trash.onclick = () => {
    score++;

    document.getElementById("score").textContent = score;
    trash.remove();
  };

  gameArea.appendChild(trash);
}

function endGame() {
  alert("Game selesai! Skor kamu: " + score);
}

  function spawnTrash() {
    const trash = document.createElement("div");
    trash.classList.add("trash");

    // Random icon
    trash.textContent = trashIcons[Math.floor(Math.random() * trashIcons.length)];

    // Random position
    const x = Math.random() * (gameArea.clientWidth - 30);
    const y = Math.random() * (gameArea.clientHeight - 30);

    trash.style.left = x + "px";
    trash.style.top = y + "px";

    // Click event
    trash.onclick = () => {
      score++;
      document.getElementById("score").textContent = score;
      trash.remove();
    };

    gameArea.appendChild(trash);

    // Remove if not clicked (biar tidak penuh)
    setTimeout(() => {
      trash.remove();
    }, 1500);
  }

  function endGame() {
    let message = "";

    if (score < 10) {
      message = "😢 Ayo lebih peduli lingkungan!";
    } else if (score < 20) {
      message = "🙂 Lumayan! Terus tingkatkan!";
    } else {
      message = "🌟 Keren! Kamu penyelamat bumi!";
    }

    alert("Game selesai!\nSkor kamu: " + score + "\n" + message);
  }