$(document).ready(function() {
    // Google Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    // ga('create', 'UA-69023226-1', 'auto');
    // ga('send', 'pageview');
    ga('create', 'UA-69023226-1', 'auto', {'allowLinker': true});
    ga('require', 'linker');
    ga('linker:autoLink', ['oh.citygoat.net', 'www.citygoat.net'] );
    ga('send', 'pageview');

    //set clicked navbar as active x
    $(document).ready(function() {
        $('ul.nav.navbar-nav').find('a[href="' + location.pathname + '"]')
            .closest('li').addClass('active');
    });
});
