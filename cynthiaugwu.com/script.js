// locomotive code 
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

function swekCircle() {
  let pX = 0;
  let pY = 0;
  window.addEventListener("mousemove", (dets) => {
    let dX = dets.clientX - pX;
    let dY = dets.clientY - pY;

    sX = gsap.utils.clamp(0.8, 1.2, dX);
    sY = gsap.utils.clamp(0.8, 1.2, dY);

    pX = dets.clientX;
    pY = dets.clientY;

    circleMouseFollower(sX, sY);
  });
}

const minicircle = document.querySelector("#minicircle");
function circleMouseFollower(sX, sY) {
  let interval = null;
  window.addEventListener("mousemove", (dets) => {
    clearInterval(interval);

    minicircle.style.display = "block";
    minicircle.style.top = dets.clientY + "px";
    minicircle.style.left = dets.clientX + "px";
    minicircle.style.transform = `scale(${sX}, ${sY})`;

    interval = setTimeout(() => {
      minicircle.style.transform = "";
    }, 200);
  });
}

const menu = document.querySelector(".nav h4");
function hoverUnderlineEffect() {
  menu.addEventListener("mouseenter", () => {
    menu.classList.add("grow");
    menu.classList.remove("shrink");
  });
  menu.addEventListener("mouseleave", () => {
    menu.classList.add("shrink");
    menu.classList.remove("grow");
  });
}

function firstPageAnime() {
  const tl = gsap.timeline();

  tl.from(".nav a, .nav h4", {
    y: "-100%",
    duration: 0.2,
  });

  tl.from(".hero .boundingelem", {
    y: "100%",
    duration: 0.4,
    stagger: 0.4,
    ease: "linear",
  });

  tl.from(".hero-footer", {
    opacity: 0,
    duration: 1,
  });
}

const elemItems = document.querySelectorAll(".elem");
function secondPageAnime() {
  elemItems.forEach((elem) => {
    const img = elem.querySelector("img");
    let lastX = 0;
    let interval = null;
    elem.addEventListener("mousemove", (dets) => {
      clearInterval(interval);
      const position = elem.getBoundingClientRect();
      const diff = gsap.utils.clamp(-20, 20, dets.clientX - lastX);
      lastX = dets.clientX;
      gsap.to(img, {
        opacity: 1,
        top: dets.clientY - position.top - 150,
        left: dets.clientX - position.left - 150,
        rotation: diff,
      });
  
      interval = setInterval(() => {
        img.style.transform = "rotate(0deg)";
      }, 500);
    });
  
    elem.addEventListener("mouseleave", () => {
      gsap.to(img, {
        opacity: 0,
        rotation: 0,
      })
    });
  });
}

circleMouseFollower();
swekCircle();
hoverUnderlineEffect();
firstPageAnime();
secondPageAnime();
