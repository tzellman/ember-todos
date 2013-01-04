require([
    'app/app',
    'app/models/todo',
    'ember'
], function (App, Todo, Ember) {

    App.AllTodosRoute = Ember.Route.extend({
        model:function () {
            return Todo.all();
        },
        renderTemplates:function () {
            this.render('todos_list', {
                into:'application'
            });
        },
        events:{
            toggleTodo:function (route, todo) {
                todo.toggleProperty('completed');
            }
        }
    });
});
