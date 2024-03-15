const now = new Date();

let mode = "time";

const output = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");

output.textContent = format(mode);

setInterval(() => {
  output.textContent = format(mode);
}, 1000);

function format(formatMode) {
  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleTimeString();
  }
}
