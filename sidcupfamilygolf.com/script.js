const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursor-blur");

const navItems = document.querySelectorAll("#nav-items h4");

const quoteLeftImg = document.querySelector(".quote-left-img");
const quoteRightImg = document.querySelector(".quote-right-img");
const quoteTextElem = document.querySelector("#text");
const quotes = [
  "Great facilities — loads of bays in the driving range with many coloured targets to aim for and a ball tracking monitor to see if you’re getting close.",

  "Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven’t been.",

  "Pleasantly surprised to discover the mini golf is open until 10pm during weekdays 😊 Always enjoy visit here, cafe does some nice goodies too 👍🏽",
  "Definitely one of the best places to hit some golf balls, the TopTracer in most of the bays is a fantastic addition for the price! I’m yet to try the Mini golf but everyone seems to be having fun over there!",

  "Absolutely loved the experience! The staff looked after me ensured I was enjoying the range and gave me helpful tips to get the best out of my game. Digital screens to see my progress. I’ll be back 😁 🏌🏽‍♀️",

  "I absolutely love the adventure golf here. It seems every time I come they’ve added a new feature. My mum and I usually come together and it’s such a laugh. The designs for the holes are creative and the two different courses makes it more fun as you can complete both and compare your scores!"
];
let quoteIdx = 1;

const page4Cards = document.querySelectorAll("#page4 .card");

document.addEventListener("mousemove", (dets) => {
  cursor.style.display = "block";
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursorBlur.style.left = dets.x + "px";
  cursorBlur.style.top = dets.y + "px";
});

navItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.classList.add("circleCursor");
    item.style.cursor = "pointer";
  });

  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("circleCursor")
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "100px",
  duration: 0.5,

  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -40px",
    end: "top -40px",
    scrub: 2,
  }
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -20%",
    end: "top -60%",
    scrub: 2,
  }
})

gsap.from("#about-us", {
  y: 150,
  opacity: 0,
  duration: 0.7,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub: 2,
  }
});

gsap.from(".card", {
  scale: 0.3,
  opacity: 0,
  duration: 0.3,
  ease: "linear",
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    scrub: 1,
    start: "top: 80%",
    end: "top 55%"
  }
});

setInterval(() => {
  quoteTextElem.textContent = quotes[quoteIdx];
  moveQuote();
  if (quoteIdx === quotes.length - 1)
    quoteIdx = 0;
  else
    quoteIdx++;
}, 5000);

function moveQuote() {
  gsap.to(".quote-left-img", {
    y: 20,
    x: 20,
    ease: "power2.inOut",
    duration: 0.5,
    yoyo: true,
    repeat: 1,
  });

  gsap.to(".quote-right-img", {
    y: -20,
    x: -20,
    ease: "linear",
    duration: 0.5,
    yoyo: true,
    repeat: 1
  });
}