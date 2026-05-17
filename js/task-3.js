const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  const text = nameInput.value.trim();
  nameOutput.textContent = text === "" ? "Anonymous" : text;
});
