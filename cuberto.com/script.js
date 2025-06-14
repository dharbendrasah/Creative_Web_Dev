Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.19, 1, 0.22, 1)",
  duration: .8,
});

Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./assets/videos/01.mp4", "./assets/videos/02.mp4", "./assets/videos/03.mp4"]
});

gsap.to(".fimg-left", {
  scrollTrigger: {
    trigger: ".featured-images",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1
});

const fimgTexts = document.querySelectorAll(".text");
Shery.imageEffect(".images", {
  style: 3,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    fimgTexts.forEach((fimgText, idx) => {
      ScrollTrigger.create({
        trigger: fimgText,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + idx);
        }
      });
    })
  },
});