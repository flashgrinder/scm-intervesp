import modal from '../libs/modules/modal';
import mask from '../libs/modules/phone-mask';
import fancybox from '../libs/modules/fancybox';
import sliderPhoto from "./modules/slider-photo";
import burgerMenu from "./modules/burger-menu";
document.addEventListener('DOMContentLoaded', function(e) {

    modal.init();
    mask.init();
    fancybox.init()
    sliderPhoto.init()
    burgerMenu.init()

});