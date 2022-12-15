let changeButton = document.querySelector("#change-button");
let changedCases = document.querySelectorAll(".value");

changeButton.addEventListener("click", () => {
    // selecting the value and trimming the extra spaces
  let userText = document.querySelector("#user-input").value.trim();

    // checking if the input if null
  if (userText.trim() == 0) {
    return;
  }

  changedCases.forEach((e) => {
    
    if (e.classList.contains("camel-case")) {
      let newArray = userText.split(" ");
      let output = newArray[0].toLowerCase();
      for (let i = 1; i < newArray.length; i++) {
        output =
          output + newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
      }
      console.log(output);
      e.innerHTML = output;
    } else if (e.classList.contains("pascal-case")) {
      let newArray = userText.split(" ");
      let output = "";
      for (let i = 0; i < newArray.length; i++) {
        output =
          output + newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
      }
      console.log(output);
      e.innerHTML = output;
    } else if (e.classList.contains("snake-case")) {
      let output = userText.toLowerCase().replaceAll(" ", "_");
      console.log(output);
      e.innerHTML = output;
    } else if (e.classList.contains("kebab-case")) {
      let output = userText.toLowerCase().replaceAll(" ", "-");
      console.log(output);
      e.innerHTML = output;
    } else if (e.classList.contains("train-case")) {
      let output = "";
      let newArray = userText.split(" ");
      for (let i = 0; i < newArray.length; i++) {
        output =
          output + newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
      }
      let newOutput = output.split(/(?=[A-Z])/);
      e.innerHTML = newOutput[0].concat("-", newOutput[1]);
    }
  });
});
