$(document).ready(function(){
    let href = window.location.href
    if (href.includes('ne-podoshel')){
        $('.tabs__item').removeClass('tabs__item_active')
        $('.tabs__item')[1].classList.add('tabs__item_active')
    }
    if (href.includes('kuplen')){
        $('.tabs__item').removeClass('tabs__item_active')
        $('.tabs__item')[2].classList.add('tabs__item_active')
    }

    // ------mailer----
    $('#modalTel, #modal_check').change(function(){

    })
    $('.modal__send').click(function(){
        let phone = $('#modalTel').val()
        if (phone.length == 17 && $('#modal_check').is(':checked')){
            $.ajax({
                url: './mail.php',
                type: 'POST',
                data: {
                    tel: phone
                },
                success: function(data){
                    console.log(data)
                    $('.modal__subtitle, .modal .input__wrapper, .modal__accept, .modal__send').fadeOut()
                    $('.modal__title').text('Ваша заявка принята')
                }
            })
        } else {
            if(phone.length != 17) {
                $('.input__title').css('color','red')
                $('.modal__input').addClass('modal__input_anim')
                setTimeout(()=>{
                    $('.modal__input').removeClass('modal__input_anim')
                },1000)

            } else {
                $('.input__title').css('color','grey')
            }
            if (!($('#modal_check').is(':checked'))) {
                $('.modal__accept').css('color','red')
            } else {
                $('.modal__accept').css('color','#333333')
            }
        }
    })
    // ------главные табы-----
    // $('.tabs__item').click(function(){
    //     let target = $(this).attr('data-target')
    //     $('.tabs__item').removeClass('tabs__item_active')
    //     $(this).addClass('tabs__item_active')
    //     $('.cases').fadeOut('fast')
    //     $(target).fadeIn('fast')
    // })

    // -----аккордеон-----

    $('.toggler__title, .toggler__check').click(function(){
        $(this).parent().toggleClass('toggler__item_active')
        $(this).parent().find('.toggler__content').slideToggle()
    })

    // -----маски на формы-----

    $('#tel').mask("+7 (999) 999-9999")
    $('#modalTel').mask("+7 (999) 999-9999")

    // ----modal----
    $('.openModal').click(function(){
        $('.modal').fadeIn('fast').addClass('modal_active')
        $('body').css('overflow-y','hidden')
    })

    $('.modal__close').click(function(){
        $('body').css('overflow-y','unset')
        $('html').css('padding-right','0')
        $('.modal').removeClass('modal_active')
        $('.modal').fadeOut('fast')
    })

    $(document).keydown(function(eventObject){
        if (eventObject.which == 27){
            $('.modal').removeClass('modal_active')
            $('.modal').fadeOut('fast')
            $('body').css('overflow-y','unset')
            $('html').css('padding-right','0')

        }
    })

})


// document.addEventListener('DOMContentLoaded', function () {
//     let toggler = document.querySelectorAll('.toggler__item')
//     toggler.forEach((elem)=>{
//         elem.addEventListener('click',()=>{
//             elem.classList.toggle('toggler__item_active')
//         })
//     })

// }, false)