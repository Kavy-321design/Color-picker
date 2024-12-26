let color = document
  .querySelectorAll(`input[type = color]`)
  .forEach(function (color) {});

let label = document.querySelector(`label` + " ");

colorArea = document.createElement("div");

colorArea.innerHTML = colorpicker.value;
