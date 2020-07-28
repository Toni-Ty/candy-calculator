function submitInput() {
  let weightInput = parseInt(document.querySelector("#weight-input").value);
  let candySelection = document.querySelector("#candy-selection").value;
  let result = document.querySelector("#result");
  let candyPrice;

  if (isNaN(weightInput)) {
    return (result.innerHTML = "Not a valid number");
  } else if (candySelection === "assorted chocolate") {
    candyPrice = weightInput * 10;
  } else if (candySelection === "chocolate bark") {
    candyPrice = weightInput * 15;
  } else if (candySelection === "chocolate peanut butter cups") {
    candyPrice = weightInput * 18;
  } else if (candySelection === "dark chocolate hearts") {
    candyPrice = weightInput * 12;
  }
  result.innerHTML = "$ " + candyPrice + " dollars";
}
