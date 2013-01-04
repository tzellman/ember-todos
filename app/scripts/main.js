// Define libraries
require.config({
    baseUrl:'scripts/',
    paths:{
        jquery:'vendor/jquery',
        ember:'vendor/ember',
        handlebars:'vendor/handlebars',
        text:'vendor/text',
        underscore:'vendor/underscore',
        app_templates:'app/templates'
    },
    shim:{
        'ember':{
            deps:['handlebars', 'jquery', 'underscore'],
            exports:'Ember',
            init: function () {
                this._ = _;
                return this;
            }
        },
        'app_templates':{
            deps:['ember'],
            exports:'Ember'
        }
    }
});


require([
    'app_templates',
    // This gets replaced by all of the application JS
    '$APP_JS'
],
    function () {
});