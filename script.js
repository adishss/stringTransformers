const userInput = document.getElementById("userInput");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const camelcase = document.getElementById("camelcase");
const pascalcase = document.getElementById("pascalcase");
const snakecase = document.getElementById("snakecase");
const kebabcase = document.getElementById("kebabcase");
const trimOutput = document.querySelector("#trim");

lowercase.innerText = userInput.value.toLowerCase();
uppercase.innerText = userInput.value.toUpperCase();
camelcase.innerText = toCamelCase(userInput.value);
pascalcase.innerText = toPascalCase(userInput.value);
snakecase.innerText = toSnakeCase(userInput.value);
kebabcase.innerText = toKebabCase(userInput.value);
trimOutput.innerText = toTrim(userInput.value);

function capitalizeString(str) {
  if (!str) return str;
  const firstcharacter = str[0].toUpperCase();
  return firstcharacter + str.slice(1);
}

function toCamelCase(str) {
  const toLowerCase = str.toLowerCase();
  const wordsArray = toLowerCase.split(" ");
  const finalArray = wordsArray.map((word, i) => {
    if (i === 0) return word;
    else {
      return capitalizeString(word);
    }
  });
  return finalArray.join("");
}

function toPascalCase(str) {
  const toLowerCase = str.toLowerCase();
  const wordsArray = toLowerCase.split(" ");
  const finalArray = wordsArray.map((word) => {
    return capitalizeString(word);
  });
  return finalArray.join("");
}

function toSnakeCase(str) {
  return str.replaceAll(" ", "_");
}

function toKebabCase(str) {
  return str.replaceAll(" ", "-");
}

function toTrim(str) {
  return str.replaceAll(" ", "");
}

userInput.addEventListener("input", () => {
  lowercase.innerText = userInput.value.trim().toLowerCase();
  uppercase.innerText = userInput.value.trim().toUpperCase();
  camelcase.innerText = toCamelCase(userInput.value.trim());
  pascalcase.innerText = toPascalCase(userInput.value.trim());
  snakecase.innerText = toSnakeCase(userInput.value.trim());
  kebabcase.innerText = toKebabCase(userInput.value.trim());
  trimOutput.innerText = toTrim(userInput.value.trim());
});
