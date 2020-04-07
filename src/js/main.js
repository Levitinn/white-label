$(document).ready(function(){
    let href = window.location.href
    if (href.includes('tovar_ne_nadlejashego_kacestva')){
        $('.tabs__item').removeClass('tabs__item_active')
        $('.tabs__item')[1].classList.add('tabs__item_active')
        let onebtn = $('.main__btn')[0]
        let secbtn = $('.main__btn')[2]
        let thirdbtn = $('.main__btn')[1]
        $(onebtn).attr('id','lawyer_page2_form2_click').attr('data-target','lawyer_page2_form2')
        $(thirdbtn).attr('id','lawyer_page2_form3_click').attr('data-target','lawyer_page2_form3')
        $(secbtn).attr('id','back_page2_form1_click').attr('data-target','back_page2_form1')
        $('.header__call').attr('id','lawyer_link3').attr('data-target','lawyer_page2_form1')
        $('.question__form').attr('id','question_page2_form1')
        console.log('ne nadl')
    } else {
        $('.main__btn').attr('id','back_index_form1_click').attr('data-target','back_index_form1')
        $('.header__call').attr('id','lawyer_link1').attr('data-target','lawyer_index_form1')
        $('.question__form').attr('id','question_index_form1')
    }
    if (href.includes('kuplen')){
        $('.tabs__item').removeClass('tabs__item_active')
        $('.tabs__item')[2].classList.add('tabs__item_active')
        $('.header__call').attr('id','lawyer_link4').attr('data-target','lawyer_page3_form1')
        $('.question__form').attr('id','question_page3_form1')
    } 
    if (href.includes('ne_podoshel')){
        $('.tabs__item').removeClass('tabs__item_active')
        $('.tabs__item')[0].classList.add('tabs__item_active')
        $('.main__btn').attr('id','back_page1_form1_click').attr('data-target','back_page1_form1')
        $('.header__call').attr('id','lawyer_link2').attr('data-target','lawyer_page1_form1')
        $('.question__form').attr('id','question_page1_form1')
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

    // ----форма на главной странице-----
    $('.form__btn').click(function(){
        let phone = $('#tel').val()
        if (phone.length == 17 && $('#check_hidden').is(':checked')){
            $.ajax({
                url: './mail.php',
                type: 'POST',
                data: {
                    tel: phone
                },
                success: function(data){
                    $('.question__form').fadeOut()
                    $('.question__text').text('Ваша заявка принята')
                }
            })
        } else {
            if(phone.length != 17) {
                $('.input__title').css('color','red')
                $('.form__input').addClass('modal__input_anim')
                setTimeout(()=>{
                    $('.form__input').removeClass('modal__input_anim')
                },1000)

            } else {
                $('.input__title').css('color','grey')
            }
            if (!($('#check__label').is(':checked'))) {
                $('.check__label').css('color','red')
            } else {
                $('.check__label').css('color','#333333')
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
        let formId = $(this).attr('data-target')
        $('.modal__block').attr('id', formId)
        console.log(formId)
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

    

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.top__btn').fadeIn()
        } else {
            $('.top__btn').fadeOut()
        }
        })
        $('.top__btn').click(function() {
        $('body,html').animate({scrollTop:0},800)
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