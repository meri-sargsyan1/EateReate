function toggleMenu() {
  const nav = document.getElementById("mainNav");
  const user = document.querySelector(".user-section");
  nav.classList.toggle("open");
  user.classList.toggle("open");
}


  document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const leftBtn = document.querySelector(".slider-btn.left");
  const rightBtn = document.querySelector(".slider-btn.right");

  const scrollStep = 300;

  leftBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -scrollStep,
      behavior: "smooth"
    });
  });

  rightBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: scrollStep,
      behavior: "smooth"
    });
  });
});


