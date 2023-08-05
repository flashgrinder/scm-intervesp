import Swiper, { Navigation, Pagination } from 'swiper';

function init() {

    Swiper.use([Navigation, Pagination]);

    const listSlider = Array.from(document.querySelectorAll(".js-present-init"));

    listSlider.forEach((item) => {
        let slider = item.querySelector('.js-present');

        const nextEl = item.querySelector('.js-present-next');
        const prevEl = item.querySelector('.js-present-prev');

        if ( slider ) {
            let sliderBlog = new Swiper(slider, {
                observer: true,
                observeParents: true,
                autoHeight: true,
                loop: false,
                navigation: {
                    nextEl: nextEl,
                    prevEl: prevEl
                },
                pagination: {
                    el: '.present__pagination',
                    type: 'bullets',
                    clickable: true,
                    bulletActiveClass: 'present__bullet--active',
                    bulletClass: 'present__bullet',
                },
            });
        }
    });

}
export default { init }