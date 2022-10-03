window.onscroll = function () {
  if (window.scrollY >= document.querySelector(".features").offsetTop - 100) {
    document.querySelectorAll(".features .box ").forEach((ele) => {
      ele.classList.add("translate");
    });
  }
};
