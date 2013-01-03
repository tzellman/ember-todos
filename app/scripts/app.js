// Define libraries
require.config({
    baseUrl:'scripts/',
    paths:{
        jquery:'vendor/jquery',
        ember:'vendor/ember',
        handlebars:'vendor/handlebars',
        text:'vendor/text'
    },
    shim:{
        'ember':{
            deps:['handlebars', 'jquery'],
            exports:'Ember'
        }
    }
});

define('app', [
    'ember'
], function () {
        var App = window.App = Ember.Application.create({
            rootElement: '#app',
            ready: function() {
                this.set('Router.enableLogging', true);
            }
        });
        return App;
    }
);
