let crsr=document.querySelector("#cursor");
let backCursor = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    backCursor.style.left = dets.x - 200 + "px";
    backCursor.style.top = dets.y - 200 + "px";
    // console.log(dets);
});

let h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    // console.log(elem);
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
        // crsr.style.color = "#000";
        // console.log(hlo);     
    });

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #89ff21 ";
        crsr.style.backgroundColor = "#89ff21";
        crsr.style.cursor = "#pointer";
        // console.log(hlo);     
        // crsr.style.color = "#fff";
    });
});

gsap.to("#nav",{
    backgroundColor :"#000",
    height:"110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    },
});

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    },
});

gsap.from("#about-us img,#about-us-in",{
    y:90,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    },
});

gsap.from(".card",{
    scale:0.8,
    duration:1,
    opacity:0,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3,
    },
});

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:4,
    },
});

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:4,
    },
});

gsap.from("#page4 h1",{
    y:50,
    duration:1,
    delay:0.5,
    scrub:4,
    scrollTrigger:{
        trigger:"#page4",
        scroll:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
    },
});


var tl = gsap.timeline();

tl.to("#food-slider-left #image" ,{
    // x:-50,
    opacity:1,
    delay:1.5,
    stagger:3,
    duration:3,
    repeat:-1,
});

