const quoteText = document.querySelector(".quote");
const numberId = document.querySelector(".number-id");
quoteClick = document.querySelector(".circle-dice");

function quoteGenerator() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((result) => {
        let finalVal = result.slip.advice
      quoteText.innerText = `"${finalVal}"`;
      numberId.innerText = result.slip.id;
    });
}
quoteClick.addEventListener("click", quoteGenerator);
