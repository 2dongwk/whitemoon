gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

$('nav a').mouseover(function(){
    gsap.to("nav a", 0.15, { opacity: 0.4 })
    gsap.to(this, 0.15, { opacity: 1 })

    const navIndex = $(this).index()
    if ( navIndex === 0 || navIndex === 2 ) {
        const comingSoon = $('nav div')
        const comingSoonPositionX = ($(window).height() * 0.03) + 3
        const comingSoonPositionY = $(this).position().top

        gsap.to(comingSoon, 0, {
            x: comingSoonPositionX,
            xPercent: -30,
            y: comingSoonPositionY,
            yPercent: 70,
            display: 'block'
        })
        gsap.to(this, 0.1, {
            background: 'radial-gradient(circle, rgba(129, 114, 96, 0)20%, rgba(129, 114, 96, 1)60%)'
        })
    }
}).mouseout(function(){
    gsap.to(this, 0.1, {
        background: 'radial-gradient(circle, rgba(129, 114, 96, 1)20%, rgba(129, 114, 96, 1)60%)'
    })

    gsap.to("nav a", 0.15, { opacity: 0.8 })
    gsap.to("nav div", 0, { display: 'none' })
})