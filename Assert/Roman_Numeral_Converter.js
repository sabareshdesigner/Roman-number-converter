const number_input = document.querySelector("#number");
const convert_btn = document.querySelector("#convert-btn");
const output = document.querySelector("#output");

const romanObject = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  XXX: 30,
  XX: 20,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const alertMsg = (e) => {
  let number = parseInt(e);
  if (e == "") {
    output.innerHTML = "Please enter a valid number";
    alert();
    return false;
  } else if (number <= 0) {
    output.innerHTML = "Please enter a number greater than or equal to 1.";
    alert();
    return false;
  } else if (number >= 4000) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
    alert();
    return false;
  }
  output.innerHTML = "";

  let result = "";
  let romanValues = Object.keys(romanObject);
  romanValues.forEach((key) => {
    while (romanObject[key] <= number) {
      output.classList.add("true");
      output.classList.remove("hidden");
      number -= romanObject[key];
      result += key;
    }
    return false;
  });
  output.innerHTML = result;
};
convert_btn.addEventListener("click", () => {
  alertMsg(number_input.value);
  number_input.value = "";
});

function alert() {
  output.classList.add("alert");
  output.classList.remove("hidden");
  output.classList.remove("true");
}

number_input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    alertMsg(number_input.value);
    number_input.value = "";
    e.preventDefault();
  }
});
