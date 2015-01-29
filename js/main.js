require.config({
    paths: {
        'jQuery': 'vendor/jquery-1.11.2.min',
        'underscore': 'vendor/underscore'
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        }
    }
});


require(['jQuery'], function ($) {
    console.log('one');
});

require(['hello'], function() {
    console.log('two');
});

