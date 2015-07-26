$(document).ready(function() {
    //set clicked navbar as active x
    $(document).ready(function() {
        $('ul.nav.navbar-nav').find('a[href="' + location.pathname + '"]')
            .closest('li').addClass('active');
    });
});
