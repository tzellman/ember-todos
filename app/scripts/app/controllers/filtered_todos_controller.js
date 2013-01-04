require([
    'app/app',
    'ember'
], function (App, Ember) {

    App.FilteredTodosController = Ember.ArrayController.extend({
        toggleTodo:function (todo) {
            todo.toggleProperty('completed');
            this.get('content').removeObject(todo);
        }
    });
});