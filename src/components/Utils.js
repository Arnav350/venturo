import "../App.css";
import "./Sign.css";
import "../pages/About.css";
import "../pages/Donate.css";
import "../pages/Faq.css";
import "../pages/Main.css";
import "../pages/Plan.css";
import "../pages/Review.css";
import "../components/Nav.css";
import "../components/Footer.css";

export const openSign = (input) => {
  let winWidth = window.innerWidth;
  let docWidth = document.documentElement.clientWidth;
  let scrollWidth = winWidth - docWidth;
  let signLeft = 50 - (scrollWidth / winWidth) * 50;

  signLeft += "%";
  scrollWidth += "px";
  document.querySelector("body").style.paddingRight = scrollWidth;

  if (input === "in") {
    document.querySelector(".signin-card").style.zIndex = 1;
    document.querySelector(".signin-card").style.opacity = 1;
    document.querySelector(".signin-card").style.top = "calc(50% + 50px)";
    document.querySelector(".signin-card").style.left = signLeft;
  } else {
    document.querySelector(".signup-card").style.zIndex = 1;
    document.querySelector(".signup-card").style.opacity = 1;
    document.querySelector(".signup-card").style.top = "calc(50% + 50px)";
    document.querySelector(".signup-card").style.left = signLeft;
  }

  document.querySelector("main").style.filter = "blur(10px)";
  document.querySelector("main").style.pointerEvents = "none";
  document.querySelector("body").style.overflow = "hidden";
  window.scrollTo(0, 0);
};

export const closeSign = (input) => {
  document.querySelector("body").style.paddingRight = 0;

  if (input === "in") {
    document.querySelector(".signin-card").style.zIndex = -1;
    document.querySelector(".signin-card").style.opacity = 0;
    document.querySelector(".signin-card").style.top = "70%";
    document.querySelector(".signin-card").style.left = "50%";
  } else {
    document.querySelector(".signup-card").style.zIndex = -1;
    document.querySelector(".signup-card").style.opacity = 0;
    document.querySelector(".signup-card").style.top = "70%";
    document.querySelector(".signup-card").style.left = "50%";
  }

  document.querySelector("main").style.filter = `blur(0px)`;
  document.querySelector("main").style.pointerEvents = "all";
  document.querySelector("body").style.overflow = "visible";
};
