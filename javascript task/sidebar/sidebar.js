function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementsByClassName("content")[0].style.marginLeft = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementsByClassName("content")[0].style.marginLeft = "0";
}
