const burgerButton = document.getElementById("burger");

const expandBurgerMenu = () => {
  const burgerMenu = document.getElementById("burger-menu");
  if ([...burgerMenu.classList].includes("closed")) {
    burgerMenu.classList.remove("closed");
    burgerMenu.classList.add("opened");
  } else {
    burgerMenu.classList.add("closed");
    burgerMenu.classList.remove("opened");
  }
};

burgerButton.addEventListener("click", () => expandBurgerMenu());