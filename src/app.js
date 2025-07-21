window.onload = () => {
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suits = [
    { symbol: "♥", class: "heart" },
    { symbol: "♦", class: "diamond" },
    { symbol: "♠", class: "spade" },
    { symbol: "♣", class: "club" }
  ];


  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  const card = document.getElementById("card");
  card.classList.add(randomSuit.class);

  document.getElementById("card-value").innerText = randomValue;

  document.getElementById("top-suit").innerHTML = randomSuit.symbol;
  document.getElementById("bottom-suit").innerHTML = randomSuit.symbol;
};
