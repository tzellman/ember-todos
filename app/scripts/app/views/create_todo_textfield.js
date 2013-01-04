require([
    'app/app',
    'ember'
], function (App, Ember) {

    App.CreateTodoTextField = Ember.TextField.extend({
        elementId:'new-todo',
        placeholder:'What needs to be done?',
        classNames:'input-xxlarge',
        insertNewline:function () {
            var value = this.get('value');

            if (value) {
                this.get('controller').send('createTodo', value);
                this.set('value', '');
            }
        }
    });

});