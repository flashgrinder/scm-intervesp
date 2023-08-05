import gsap from 'gsap';

const burger = document.querySelector('.js-burger');
const menu = document.querySelector('.js-menu');
const page = document.querySelector('.js-page-open-menu');
// const modals = document.querySelectorAll('.js-modal');
let isOpen = burger.classList.contains('is-open');

let tl = gsap.timeline({defaults: {duration: .2, ease: 'power3.out'}});

tl.paused(true);
tl.to('.header__inner', {opacity: 1, visibility: 'visible', autoAlpha: 1, ease: 'power3.out'});
// tl.to('.header__menu-list > .header__menu-item', {opacity: 1, x: '0px', stagger: .1, ease: 'power3.out'});

function open() {
    burger.classList.add('is-open');
    menu.classList.add('is-open');
    page.classList.add('is-open');

    setTimeout(() => {
        tl.play();
    }, 200);

    isOpen = true;

    // if(isOpen) {
    //     modals.forEach(modal => modal.classList.remove('is-open'));
    // }
}

function close() {
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
    page.classList.remove('is-open');
    tl.reverse(1);
    isOpen = false;
}

const anchorLinks = document.querySelectorAll('.js-anchor-link'); // .js-anchor-link .menu__link

anchorLinks.forEach(link => {
    link.addEventListener('click', () => {
        close();
    })
});

document.addEventListener('keydown', (e) => {if(e.keyCode === 27 || e.which === 27) {close()}});

function toggle() {
    isOpen ? close() : open();
}

function init() {
    burger.addEventListener('click', toggle);
}

function destroy() {
    burger.removeEventListener('click', toggle)
}

export default {init, destroy, toggle, close}