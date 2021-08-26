// navigation constants
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelectorAll(".navigation__link");

// onclick - scroll to the corresponding section
navLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => (navToggle.checked = false))
);

// popup constant
const popup = document.getElementById("popup");

// when we click outside of the popup -- we want popup to close
const closePopup = () => {
  // The window.location object can be used to get the current page address (URL)
  // and to redirect the browser to a new page.
  window.location = "https://ajay-user.github.io/NaTours/#section-tours";
};
popup.addEventListener("click", closePopup);
