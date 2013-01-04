define('app/app', [
    'ember'
], function (Ember) {
        var App = window.App = Ember.Application.create({
            rootElement: '#app',
            ready: function() {
                this.set('Router.enableLogging', true);
            }
        });
        return App;
    }
);
