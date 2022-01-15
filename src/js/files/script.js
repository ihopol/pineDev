function checkWidth() {
  let currentWidth = document.documentElement.clientWidth;
  let currentHeight = document.documentElement.clientHeight;

  if (currentWidth <= 926 && currentWidth > currentHeight) {
    document.documentElement.classList.add("horizontal-mobile");
  } else {
    document.documentElement.classList.remove("horizontal-mobile");
  }

}

checkWidth();
window.addEventListener("resize", checkWidth);
