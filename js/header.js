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
        const comingSoonPosition = $(this).position().left + ($(this).width() / 2)
        
        gsap.to(comingSoon, 0, {
            x: comingSoonPosition,
            xPercent: -50,
            display: 'block'
        })
        gsap.to(this, 0.1, {
            background: 'radial-gradient(circle, rgba(0, 0, 0, 0)20%, rgba(0, 0, 0, 1)60%)'
        })
    }
}).mouseout(function(){
    gsap.to(this, 0.1, {
        background: 'radial-gradient(circle, rgba(0, 0, 0, 1)20%, rgba(0, 0, 0, 1)60%)'
    })

    gsap.to("nav a", 0.15, { opacity: 0.8 })
    gsap.to("nav div", 0, { display: 'none' })
})