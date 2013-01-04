require([
    'app/app',
    'ember'
], function (App, Ember) {

    App.EditTodoTextField = Ember.TextField.extend({
        classNames:['edit'],
        change:function () {
            if (Ember.empty(this.get('value'))) {
                var todo = this.get('controller.content');
                this.get('controller.target').send('removeTodo', todo);
            }
        },
        valueBinding:'todo.title',

        didInsertElement:function () {
            this.$().focus();
        },
        insertNewline:function () {
            this.whenDone();
        },
        focusOut:function () {
            this.whenDone();
        },
        whenDone:function () {
            this.set('todo.editing', false);
        }
    });

});