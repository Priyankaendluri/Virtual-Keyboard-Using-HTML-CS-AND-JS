document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("textInput");
  const keys = document.querySelectorAll(".key");

  keys.forEach(key => {
    key.addEventListener("click", function () {
      const keyText = key.innerText;

      if (keyText === "Space") {
        textInput.value += " ";
      } else if (keyText === "Backspace") {
        textInput.value = textInput.value.slice(0, -1);
      } else {
        textInput.value += keyText;
      }
    });
  });
});

