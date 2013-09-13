var suite = require('./kasperle').suite();

suite.run('/', function(test, waitFor) {

    waitFor(function() {
        return suite.exists('#splash-overlay.hide');
    });

    test('Homepage baseline tests', function(assert) {
        assert.title('Firefox Danger Zone');

        assert.visible('.wordmark');
        assert.visible('.header-button.settings');  // Persona not visible at mobile width :O
        assert.visible('#search-q');
        assert.invisible('.expand-toggle');
        assert.selectorDoesNotExist('.mkt-tile .tray');

        suite.capture('homepage.png');
    });
});
