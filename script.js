gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

let circule = document.querySelector(".circule");
let cursor = document.querySelector(".cursor");
let body = document.querySelector("body");
let play = document.querySelector(".play");
let vdo = document.querySelector(".page4-1 video");
let img = document.querySelectorAll(".boxes img");
let box = document.querySelectorAll(".boxes");

box.forEach((box) => {
  box.addEventListener("mousemove", (e) => {
    img.forEach((img) => {
      img.style.left = e.clientX + "px";
      img.style.top = e.clientY + "px";
    });
  });
});
body.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
circule.addEventListener("mouseenter", () => {
  cursor.style.scale = 1.5;
  cursor.style.backgroundColor = "#0f2816";
});

circule.addEventListener("mouseleave",()=>{
 cursor.style.scale = 1;
 cursor.style.backgroundColor="#ECBFFE";
})
vdo.addEventListener("mouseenter", (e)=>{
   cursor.style.display= "none";
    play.style.display ="block"
    play.style.left =e.clientX +"px"; 
    play.style.top =e.clientY +"px"; 
})
vdo.addEventListener("mouseleave", (e)=>{
  play.style.display ="none";
  cursor.style.display ="block";
  
})
//  let time = gsap.timeline();

gsap.to(".page1 h1",{
  x:-700,
  scrollTrigger:{
    scroller:".main",
    trigger: ".page1 h1",
    scrub: 3,
    start:"top50%"
 
  }
})


gsap.to(".page1 h2",{
  x:700,
  scrollTrigger:{
    scroller:".main",
    trigger: ".page1 h2",
      scrub:3,
      start:"top50%"
  }
})


gsap.to(".video-box",{
    scrollTrigger:{
        scroller:".main",
        trigger:".video-box",
        start:"top center",
        end:"bottom center",
        scrub:true
    },
    scale:1.1,
})

gsap.to(".main",{
  backgroundColor:"white",
  color:"#111",
  scrollTrigger :{
    scroller: ".main",
    trigger:".page4",
    start:"top 90%",
    end :"bottom 30%",
    scrub:1,
    // markers:true,
  }
})

gsap.to(".main",{
  backgroundColor:"#010001",
  color:"white",
  scrollTrigger :{
    scroller: ".main",
    trigger:".page5",
    start:"top 10%",
    end :"bottom 30%",
    scrub:1,
  }
})