const main_bg_color = '#fcfaf2';
const cdarkblue = '#031740';
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

function add_navbar(navbar_html_filepath, current_page_class) {
    $.get(navbar_html_filepath, function (data, status) {
        var $data = $(data);
        if (language === 'en') {
            $data = switch_html_snippet_language_to_en($data);

        }
        if (current_page_class != '') {
            $data.find("." + current_page_class).css("color", cdarkblue).css("font-weight", "bold");
        }
        $('#navbar-template-section').html($data.unwrap());
    });
    console.log("navbar loaded")
}

function add_footer(footer_path, image_path) {
    $.get(footer_path, function (data, status) {
        var $data = $(data);
        console.log(language);
        if (language === 'en') {
            $data = switch_html_snippet_language_to_en($data);
        }
        console.log($($data));
        // console.log( $data.find('#footer_logo'));
        //console.log($data.find('#footer_logo'));
        $($data[6]).attr('src', image_path); //for some reason finding id does not work... todo refactor this
        //console.log($data.find('#footer_logo').attr('src'));
        // if (language === 'en') {
        //console.log($data.find('#children_menu').text());
        $('#footer-section').html($data.unwrap());
    });
    console.log("footer loaded")
}

function switch_html_snippet_language_to_en($data) {
    $data.find('.cs-lang').each(function (index, item) {
        var $text = $(item);
        $text.css("display", "none");
    });
    $data.find('.en-lang').each(function (index, item) {
        var $text = $(item);
        $text.css("display", "block");
    });
    return $data
}

function set_lang_en() {
    window.localStorage.setItem('language', 'en');
    console.log("en clicked")
}

function set_lang_cs() {
    window.localStorage.setItem('language', 'cs');
    console.log("cs clicked")
}




