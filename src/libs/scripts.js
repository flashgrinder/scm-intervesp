import gsap from 'gsap';
import modal from '../libs/modules/modal';
import mask from '../libs/modules/phone-mask';
import fancybox from '../libs/modules/fancybox';
import sliderPhoto from "./modules/slider-photo";
import burgerMenu from "./modules/burger-menu";
import countdown from "./modules/countdown";
document.addEventListener('DOMContentLoaded', function(e) {

    gsap.config({
        nullTargetWarn: true,
        // force3D: true
    });

    modal.init();
    mask.init();
    fancybox.init();
    sliderPhoto.init();
    burgerMenu.init();
    countdown.init();

});