gsap.registerPlugin(ScrollTrigger);

gsap.to(".arrow-down", {ScrollTrigger:".arrow-down",y: 10, repeat: -1, yoyo: true });
gsap.to(".arrow-up", {ScrollTrigger:".arrow-up",y: -10, repeat: -1, yoyo: true });

const wrapper = document.getElementById("scroll-wrapper");
const imagesWrapper = document.getElementById("images-wrapper");
const textWrappers = gsap.utils.toArray(".text-wrapper");

gsap.to([imagesWrapper, textWrappers], {
  x: (_, el) => -(el.scrollWidth - window.innerWidth),
  scrollTrigger: {
    trigger:wrapper,
    start: "top top",
    // end: "bottom top",
    end: "400%",
    pin: true,
    scrub: true,
    invalidateOnRefresh: true
    // markers: true
  }
});