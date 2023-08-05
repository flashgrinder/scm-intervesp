import $ from 'jquery';
import HystModal from 'hystmodal';
function init(container = document) {
    let wpcf7Elem = document.querySelectorAll( '.wpcf7-form' );
    wpcf7Elem.forEach(function(elem) {
        elem.addEventListener( 'submit', function( e ) {
            modalsForms.open('.js-modal-success');
        }, false );
    });

    const modalsForms = new HystModal({
        linkAttributeName: "data-modal",
        catchFocus: false,
        waitTransitions: true,
        backscroll: false,
    });

    $(document).ready(function () {
        $(document).on("submit","#callback-form", function (event) {
            event.preventDefault();
            var __this = $(this)
            __this.find(".wpcf7-response-output").remove()
            $.ajax({
                url: '/ajax.php',
                method: 'POST',
                dataType: 'json',
                data: __this.serialize(),
                success: function(data){
                    if(data.result==true){
                        __this.removeClass("invalid")
                        modalsForms.open('.js-modal-success');
                    }else{
                        __this.addClass("invalid")
                        __this.append($("<div>",{
                            "class":"wpcf7-response-output",
                            "aria-hidden":"true",
                            "html":data.message
                        }))
                    }
                }
            });
            return false;
        })
    })
}
export default {init}