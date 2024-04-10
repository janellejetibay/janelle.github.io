function filterObjects(filterClass) {
  var boxes = document.getElementsByClassName("box");
  for (var box of boxes) {
    box.classList.toggle(
      "show",
      filterClass === "all" || box.classList.contains(filterClass)
    );
  }
}
