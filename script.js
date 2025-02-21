const userInput = document.getElementById("userInput");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const camelcase = document.getElementById("camelcase");

lowercase.innerText = userInput.value.toLowerCase();
uppercase.innerText = userInput.value.toUpperCase();
camelcase.innerText = toCamelCase(userInput.value);

function capitalizeString(string) {
  const firstcharacter = string[0].toUpperCase();
  return firstcharacter + string.slice(1);
}

function toCamelCase(string) {
  const toLowerCase = string.toLowerCase();
  const wordsArray = toLowerCase.split(" ");
  const finalArray = wordsArray.map((word, i) => {
    if (i === 0) return word;
    else {
      return capitalizeString(word);
    }
  });
  return finalArray.join("");
}

userInput.addEventListener("input", () => {
  lowercase.innerText = userInput.value.toLowerCase();
  uppercase.innerText = userInput.value.toUpperCase();
  camelcase.innerText = toCamelCase(userInput.value);
});
