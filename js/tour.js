gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline();

const contentImg = $('.content-interactive-img img')

gsap.set(contentImg, {
    yPercent: 100
})

$('.content-text-wrapper').mouseenter(function(){
    const contentIndex = $(this).parent('a').parent('div').index();
    const thisContentImg = contentImg.eq(contentIndex)

    gsap.to(thisContentImg, 0, {
        zIndex: 1
    })
    gsap.to(thisContentImg, 1, {
        yPercent: 0,
        ease: 'power4.out'
    })
}).mouseleave(function(){
    const contentIndex = $(this).parent('a').parent('div').index();
    const thisContentImg = contentImg.eq(contentIndex)

    gsap.to(thisContentImg, 0, {
        zIndex: 0
    })
    gsap.to(thisContentImg, 1, {
        yPercent: 100,
        ease: 'power4.out'
    })
})

$('.content-text-wrapper').mousemove(function(e){
    const imgX = e.pageX + 20
    const imgY = e.pageY + 30

    $('.content-interactive-img').fadeIn(200)

    gsap.to(".content-interactive-img", 0.8, {
        top: '0',
        left: '0',
        x: imgX,
        y: imgY,
        ease: 'power3.out'
    })
})

// const contents = document.querySelectorAll('.content');

// contents.forEach( content => {
//     content.addEventListener("mouseover", function() {
//         const contentImg = this.querySelector('img');
//         const contentImgUrl = contentImg.getAttribute('src');

//         gsap.to(".content-interactive-bg", 0.3, {
//             background: `url(${contentImgUrl}) no-repeat`,
//             opacity: 0.2
//         })
//     })

//     content.addEventListener("mouseout", function() {
//         gsap.to(".content-interactive-bg", 0.3, { opacity: 0 })
//     })

//     content.addEventListener("click", function() {
//         const contentIndex = $(this).index();


//     })
// })

