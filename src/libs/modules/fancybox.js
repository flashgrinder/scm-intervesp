import  { Fancybox } from '@fancyapps/ui';

function init() {

    Fancybox.bind("[data-fancybox]", {
        Thumbs: {
            type: "classic",
        },
    });

}
export default { init }