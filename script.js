var tl=gsap.timeline();
tl.from("#page1 h1",{
    opacity:0,
    duration:2
})
.from("#page1 #image1",{
    y:"15%",
    duration:1.5,
    opacity:0.5
},"-=2")
.from("#page1 #image2",{
    x:"25%",
    duration:1.5,
    opacity:0.5
},"-=2")
.from("#page1 #image3",{
    y:"-25%",
    duration:1.5,
    opacity:0.5
},"-=2")

var img1= document.querySelector("#image1");
var img2= document.querySelector("#image2");
var img3=document.querySelector("#image3");
img1.addEventListener("mousemove",function(){
    img1.style.top="16%";
})
img1.addEventListener("mouseleave",function(){
    img1.style.top="18%";
})
img2.addEventListener("mousemove",function(){
    img2.style.top="12%";
})
img2.addEventListener("mouseleave",function(){
    img2.style.top="13%";
})
img3.addEventListener("mousemove",function(){
    img3.style.bottom="6%";
})
img3.addEventListener("mouseleave",function(){
    img3.style.bottom="5%";
})
gsap.to("#nav",{
    scrollTrigger:{
        trigger:"#page2a",
        start:"top 95%",
        duration:1,
        toggleAction:"restart none reverse pause",
        // markers:true

    },
    y:"-100%",
    duration:2
})