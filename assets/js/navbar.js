const navbar1 = document.querySelector(".navbar1");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const body = document.querySelector("body");
menuBtn.onclick = () => {
  navbar1.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar1.classList.remove("show");
  menuBtn.classList.remove("hide");
};
window.onscroll = () => {
  this.scrollY > 20
    ? navbar1.classList.add("sticky")
    : navbar1.classList.remove("sticky");
};
