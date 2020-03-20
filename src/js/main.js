$(document).ready(function(){
    let cases = $('.cases')
    // ------главные табы-----
    $('.tabs__item').click(function(){
        let target = $(this).attr('data-target')
        $('.tabs__item').removeClass('tabs__item_active')
        $(this).addClass('tabs__item_active')
        $('.cases').fadeOut('fast')
        $(target).fadeIn('fast')
    })

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
        if (user.includes('Macintosh')){
            return
        } else {
            $('html').css('padding-right','15px')
        }
    })

    $('.modal__close').click(function(){
        $('body').css('overflow-y','unset')
        $('html').css('padding-right','0')
        $('.modal').removeClass('modal_active')
        $('.modal').fadeOut('fast')
    })

    $(document).keydown(function(eventObject){
        if (eventObject.which == 27)
            $('.modal').removeClass('modal_active')
            $('.modal').fadeOut('fast')
            $('body').css('overflow-y','unset')
            $('html').css('padding-right','0')
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