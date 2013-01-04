require([
    'app/app',
    'app/models/todo',
    'ember'
], function (App, Todo, Ember) {

    App.CompletedTodosRoute = Ember.Route.extend({
        model:function () {
            return Todo.all().filterProperty('completed', true);
        },
        renderTemplates:function () {
            this.render('todos_list', {
                into:'application',
                controller:'filteredTodos'
            });
        },
        setupControllers:function (controller, model) {
            this.controllerFor('filteredTodos').set('content', model).set('whenNone', 'No Completed Todos');
        }
    });
});
