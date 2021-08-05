function posicionarMenu() {
    var e = $("header").outerHeight(true);
    var t = $("nav").outerHeight(true);
    if ($(window).scrollTop() >= e - t) {
        $("nav").addClass("navbar-fixed-top");
        $("nav").removeClass("trampa")
    } else {
        $("nav").addClass("trampa");
        $("nav").addClass("navbar-fixed-top")
    }
}
function showInfo(e, t) {
    $.each(t.sheets("slide").all(), function (e, t) {
        var n = $('<li data-target="#myCarousel" data-slide-to="' + t.id + '" class="' + t.class + '"></li>');
        n.appendTo(".carousel-indicators");
        var r = $('<div class="item row ' + t.class + '"><div class="span5 offset1"><img height="263" src="' + t.src + '" alt="' + t.alt + '"></div><div class="span5"><div class="block"><p><b>' + t.titulo + '</b></p><p>' + t.parrafo + '</p></div><p><a class="btn btn-primary btn-large" href="' + t.href + '" target="' + t.target + '">' + t.boton + "</a></p></div></div>");
        r.appendTo(".carousel-inner")
    })
}
$(document).ready(function () {
    $("#myCarousel").carousel({
        interval: 4200
    });

    $("#myCarousel").swiperight(function () {
        $("#myCarousel").carousel("prev")
    });

    $("#myCarousel").swipeleft(function () {
        $("#myCarousel").carousel("next")
    })
});

$(document).ready(function () {
    posicionarMenu();

    $(window).scroll(function () {
        posicionarMenu()
    })
});

var public_spreadsheet_url = "";
$(document).ready(function () {
    Tabletop.init({
        key: public_spreadsheet_url,
        callback: showInfo,
        simpleSheet: true,
        debug: true
    })
})

