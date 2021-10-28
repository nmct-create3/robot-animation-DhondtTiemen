// gsap.to('#Robot', { duration: 1, x: 50 });
// gsap.from('#Robot', { duration: 1, x: 50 });
// gsap.set('#Robot', { duration: 1, x: 50 });
// gsap.fromTo('#Robot', { x: -50 }, { duration: 1, x: 50 })

//-------------------
// gsap.to('#Robot', {
//     duration: 2,
//     ease: 'elastic.out(2.5,0.1)',
//     x: 50,
//   })

//--------------------
// let tl = gsap.timeline()

// tl.fromTo('#Robot',{
// y: 2.5,
// },{
// duration: .75,
// y: -2.5,
// }).to('#Shadow', {
// duration: .75,
// scale: 0.75,
// })

//----------------
let tl = gsap.timeline({
    defaults: {
        duration: 1,
        ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
})

tl.set('#Shadow', {
    transformOrigin: '50% 100%',
})
    .fromTo('#Robot', {
        y: 2.5,
    }, {
        y: -2.5,
    })
    .to('#Shadow', {
        scale: 0.75,
    },
        '-=.75',
    )

    .to('#Shadow', {
        scale: 0.75,
    },
        '<',
    )


const btnPause = document.querySelector('.js-pause');
btnPause.onclick = function(){
    tl.paused(!tl.paused())
}

const btnFast = document.querySelector('.js-fast');
btnFast.onclick = () => tl.timeScale(2)

const btnNormal = document.querySelector('.js-normal');
btnNormal.onclick = () => tl.timeScale(1)

const btnSlow = document.querySelector('.js-slow');
btnSlow.onclick = () => tl.timeScale(0.5)