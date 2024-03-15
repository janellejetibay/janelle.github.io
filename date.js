const now = new Date();

let mode = "time";
const Now = new Date();
const output = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

fullBtn.onclick = bindMode("full");
dateBtn.onclick = bindMode("date");
timeBtn.onclick = bindMode("time");

setInterval(update, 100);
update();

function update() {
  output.textContect = format(mode);
}

function format(formatMode) {
  const now = new Date();

  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString() + "-" + now.getMilliseconds();
    case "date":
      return now.toLocaleTimeString();
    case "full":
      return now.toLocaleTimeString() + " " + now.toLocaleTimeString();
    default:
      return now.toLocaleTimeString();
  }
}
