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
  const signins = document.querySelector(".signin-card").style;
  const signups = document.querySelector(".signup-card").style;
  const bodys = document.querySelector("body").style;
  const mains = document.querySelector("main").style;
  const navs = document.querySelector(".nav-bar").style;

  let winWidth = window.innerWidth;
  let docWidth = document.documentElement.clientWidth;
  let scrollWidth = winWidth - docWidth;
  let signLeft = 50 - (scrollWidth / winWidth) * 50;

  signLeft += "%";
  scrollWidth += "px";
  bodys.paddingRight = scrollWidth;

  if (input === "in") {
    signins.zIndex = 1;
    signins.opacity = 1;
    signins.top = "50%";
    signins.left = signLeft;
  } else {
    signups.zIndex = 1;
    signups.opacity = 1;
    signups.top = "50%";
    signups.left = signLeft;
  }

  mains.filter = "blur(10px)";
  mains.pointerEvents = "none";
  navs.filter = "blur(10px)";
  navs.pointerEvents = "none";
  bodys.overflow = "hidden";
  window.scrollTo(0, 0);
};

export const closeSign = (input) => {
  const signins = document.querySelector(".signin-card").style;
  const signups = document.querySelector(".signup-card").style;
  const bodys = document.querySelector("body").style;
  const mains = document.querySelector("main").style;
  const navs = document.querySelector(".nav-bar").style;

  bodys.paddingRight = 0;

  if (input === "in") {
    signins.zIndex = -1;
    signins.opacity = 0;
    signins.top = "60%";
    signins.left = signups.left;
    document.querySelector(".signin-email").value = "";
    document.querySelector(".signin-password").value = "";
  } else {
    signups.zIndex = -1;
    signups.opacity = 0;
    signups.top = "60%";
    signups.left = signins.left;
    document.querySelector(".signup-email").value = "";
    document.querySelector(".signup-password").value = "";
    document.querySelector(".signup-confirm").value = "";
    document.querySelector(".signup-check").innerHTML = "";
  }

  mains.filter = `blur(0px)`;
  mains.pointerEvents = "all";
  navs.filter = `blur(0px)`;
  navs.pointerEvents = "all";
  bodys.overflow = "visible";
};
