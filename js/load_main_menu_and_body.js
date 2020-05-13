const main_bg_color = '#fcfaf2';
const testcolor = '#123123';
var language = window.localStorage.getItem('language');

function set_bg_color() {
    $('body').css({backgroundColor: main_bg_color});
}

function add_navbar() {
    $.get('templates/navbar.html', function (data, status) {
        //console.log(data);
        //$('#navbar-template-section').html(data);
        var $data=$(data);

         if(language==='en') {
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

function add_navbar_other_path() {
    $.get('../templates/navbar_other_path.html', function (data, status) {
        //console.log(data);
        //$('#navbar-template-section').html(data);
        var $data=$(data);

         if(language==='en') {
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
