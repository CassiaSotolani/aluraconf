function ativarScrollSuave(selector) {

    $(selector).click(function(event) {

        event.preventDefault();
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000)
    });
}

ativarScrollSuave('a[href="#sobre"]');
ativarScrollSuave('a[href="#palestrantes"]');
ativarScrollSuave('a[href="#formulario"]');