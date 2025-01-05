gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline();

$('.content').mouseenter(function(){
    gsap.to(".cursor", 0.2, {
        scale: 1,
        ease: 'expo.out'
    })
}).mouseleave(function(){
    gsap.to(".cursor", 0.2, {
        scale: 0,
        ease: 'expo.out'
    })

    gsap.to('.content', 0.2, {
        scale: 1,
        ease: 'expo.out'
    })
})

$('.content').mousemove(function(e){
    const cursorX = e.pageX - 54
    const cursorY = e.pageY + 40

    gsap.to(".cursor", 0, {
        x: cursorX,
        y: cursorY
    })
})

$('.content').mousedown(function(){
    gsap.to(this, 0.2, {
        scale: 0.95,
        ease: 'expo.out'
    })
}).mouseup(function(){
    gsap.to(this, 0.2, {
        scale: 1,
        ease: 'expo.out'
    })
})

function copyToClipboard(val) {
    let copyText = document.createElement("textarea")
    document.body.appendChild(copyText)
    copyText.value = val
    copyText.select()
    document.execCommand('copy')
    document.body.removeChild(copyText)
}

$('.content').click(function(){
    copyToClipboard('whitemoontheband@gmail.com')

    if (!$('.copy-text-wrapper').hasClass('animated')) {
        $('.copy-text-wrapper').addClass('animated')

        gsap.to(".copy-text:nth-child(1)", 0.6, {
            yPercent: -100,
            ease: 'power3.out',
            onComplete: () => {
                gsap.set(".copy-text:nth-child(1)", {
                    yPercent: 100
                })
            }
        })
    
        gsap.to(".copy-text:nth-child(1)", 0.6, {
            delay: 1,
            yPercent: 0,
            ease: 'power3.out'
        })
    
        gsap.to(".copy-text:nth-child(2)", 0.6, {
            yPercent: -100,
            ease: 'power3.out'
        })
    
        gsap.to(".copy-text:nth-child(2)", 0.6, {
            delay: 1,
            yPercent: -200,
            ease: 'power3.out',
            onComplete: () => {
                gsap.set(".copy-text:nth-child(2)", {
                    yPercent: 0
                })

                $('.copy-text-wrapper').removeClass('animated')
            }
        })
    }
})