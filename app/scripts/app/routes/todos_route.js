require([
    'app/app',
    'app/models/todo',
    'ember'
], function (App, Todo, Ember) {

    App.TodosRoute = Ember.Route.extend({
        model:function () {
            return Todo.all();
        },

        events:{
            createTodo:function (route, text) {
                if (!text.trim()) {
                    return;
                }

                Todo.createRecord({
                    title:text
                });
            },

            removeTodo:function (route, todo) {
                Todo.destroy(todo);
            },

            editTodo:function (route, todo) {
                todo.set('editing', true);
            }
        }
    });
});