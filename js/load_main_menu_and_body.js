const main_bg_color = '#fcfaf2';
const cdarkblue = '#031740';
const testcolor = '#123123';
var language = window.localStorage.getItem('language');


function set_bg_color() {
    $('body').css({
        "background-color": main_bg_color,
        "border-left-style": "solid",
        "border-left-color": cdarkblue,
        "border-right-style": "solid",
        "border-right-color": cdarkblue,
        "border-bottom-style": "solid",
        "border-bottom-color": cdarkblue
    });
}

function add_navbar() {
    $.get('templates/navbar.html', function (data, status) {
        //console.log(data);
        //$('#navbar-template-section').html(data);
        var $data = $(data);

        if (language === 'en') {
            //console.log($data.find('#children_menu').text());
            $data.find('#children_menu').text("Children");
            $data.find('#adults_menu').text("Adults");
            $data.find('#teachers_menu').text("Teachers");
            $data.find('#navbarDropdown').text("Language");
        }
        $('#navbar-template-section').html($data.unwrap());
    });
    //var template_section = $('#navbar-template-section').load('templates/navbar.html');
    console.log("navbar loaded")
}

function add_footer(footer_path, image_path) {
    $.get(footer_path, function (data, status) {
        //console.log(data);
        //$('#navbar-template-section').html(data);
        var $data = $(data);
        //console.log($data);
        //console.log($($data[2]));
       // console.log( $data.find('#footer_logo'));
        //console.log($data.find('#footer_logo'));
        $($data[2]).attr('src',image_path); //for some reason finding id does not work... todo refactor this
        //console.log($data.find('#footer_logo').attr('src'));
        if (language === 'en') {
            //console.log($data.find('#children_menu').text());

        }
        $('#footer-section').html($data.unwrap());
    });
    console.log("footer loaded")
}

function add_navbar_other_path(current_page_id) {
    $.get('../templates/navbar_other_path.html', function (data, status) {
        //console.log(data);
        //$('#navbar-template-section').html(data);
        var $data = $(data);

        if (language === 'en') {
            //console.log($data.find('#children_menu').text());
            $data.find('#children_menu').text("Children");
            $data.find('#adults_menu').text("Adults");
            $data.find('#teachers_menu').text("Teachers");
            $data.find('#navbarDropdown').text("Language");
        }
        $data.find("#" + current_page_id).css("color", cdarkblue).css("font-weight", "bold");
        $('#navbar-template-section').html($data.unwrap());
    });
    //var template_section = $('#navbar-template-section').load('templates/navbar.html');
    console.log("navbar loaded")
}

function navbar_en() {
    $('#children_menu').text("Children");
    $('#adults_menu').text("Adults");
    $('#teachers_menu').text("Teachers");
    $('#navbarDropdown').text("Language");
    window.localStorage.setItem('language', 'en');
    console.log("en clicked")
}

function navbar_cs() {
    $('#children_menu').text("Děti");
    $('#adults_menu').text("Dospělí");
    $('#teachers_menu').text("Učitelé");
    $('#navbarDropdown').text("Jazyk");
    window.localStorage.setItem('language', 'cs');
    console.log("cs clicked")
}

function expand_language_on_hover() {
    var isHovered = $('.nav-item.dropdown').is(":hover");
    if (isHovered) {
        $('.nav-item.dropdown').addClass('show').children('div').addClass('show')
    } else {
        $('.nav-item.dropdown').removeClass('show').children('div').removeClass('show')
    }
}

function navbar_resizing_scrolling() {
    if (window.scrollY * 3 > window.innerHeight) {
        if (navbarsize === 'large') {
            $('.navbar-brand').removeClass("turn_navbar_tall").delay(100).addClass("turn_navbar_small");
            $('#navbar-template-section').removeClass("navbar_no_margin").delay(10).addClass("navbar_has_margin");
            //console.log($('.navbar-brand'));
            navbarsize = 'small';
        }
    } else {
        if (navbarsize === 'small') {
            $('.navbar-brand').removeClass("turn_navbar_small").delay(100).addClass("turn_navbar_tall");
            $('#navbar-template-section').removeClass("navbar_has_margin").delay(10).addClass("navbar_no_margin");

            //   setTimeout(() => {
            //       $('.navbar-brand').removeClass("turn_navbar_tall");
            //        $('#navbar-template-section').removeClass("navbarmarginbotfalse");
            //   }, 1500);
            navbarsize = 'large';

        }
    }
}
