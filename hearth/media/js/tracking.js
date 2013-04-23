define('tracking', ['settings'], function(settings) {
    if (!settings.tracking_enabled) {
        return;
    }

    // GA Tracking.
    window._gaq = window._gaq || [];

    _gaq.push(['_setAccount', 'UA-36116321-6']);
    _gaq.push(['_trackPageview']);


    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    // GA is the first script element.
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);

});
