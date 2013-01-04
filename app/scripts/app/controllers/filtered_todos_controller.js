require([
    'app/app',
    'ember'
], function (App, Ember) {

    App.FilteredTodosController = Ember.ArrayController.extend({
        toggleTodo:function (event) {
            var todo = event.context;
            todo.toggleProperty('completed');
            this.get('content').removeObject(todo);
        }
    });
});