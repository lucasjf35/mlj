const nav = document.querySelector('.nav');
const navOffsetTop = nav.offsetTop;

window.addEventListener('scroll', () => {
    console.log("scroll !");
    if (window.scrollY >= navOffsetTop) {
        nav.style.position = 'fixed';
        nav.style.top = 0;
        nav.style.width = "100%";
    }
    else{
        nav.style.position = 'static';
    }
});

const slidingNewsletter = document.querySelector('.wp-container-12');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5){
        slidingNewsletter.classList.add('active')
    }
})

const slidingNewsletter2 = document.querySelector('.wp-container-5');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = slidingNewsletter2.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5){
        slidingNewsletter2.classList.add('active')
    }
})

const slidingNewsletter3 = document.querySelector('.wp-container-11');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = slidingNewsletter3.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5){
        slidingNewsletter3.classList.add('active')
    }
})

const slidingNewsletter4 = document.querySelector('.wp-container-3');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = slidingNewsletter4.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        slidingNewsletter4.classList.add('active')
    }
})

const slidingNewsletter5 = document.querySelector('.wp-container-14');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = slidingNewsletter5.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.7){
        slidingNewsletter5.classList.add('active')
    }
})