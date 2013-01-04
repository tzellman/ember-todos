require([
    'app/app',
    'ember'
], function (App, Ember) {

    App.TodosController = Ember.ArrayController.extend({
        total:function () {
            return this.get('length');
        }.property('@each.length'),

        remaining:function () {
            return this.filterProperty('completed', false).get('length');
        }.property('@each.completed'),

        completed:function () {
            return this.filterProperty('completed', true).get('length');
        }.property('@each.completed'),

        noneLeft:function () {
            return this.get('total') === 0;
        }.property('total'),

        allAreDone:function (key, value) {
            if (value !== undefined) {
                this.setEach('completed', value);
                return value;
            } else {
                return !!this.get('length') &&
                    this.everyProperty('completed', true);
            }
        }.property('completed'),

        oneLeft:function () {
            return this.get('remaining') === 1;
        }.property('remaining'),

        clearCompleted:function () {
            var target = this.get('target');
            this.filterProperty('completed', true).forEach(function (todo) {
                target.send('removeTodo', todo);
            });
        }
    });
});