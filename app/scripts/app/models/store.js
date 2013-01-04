define('app/models/store', [
    'app/app',
    'ember',
], function (App, Ember) {

    var localStorage = window.localStorage,
        get = Ember.get, set = Ember.set;

    var Store = Ember.Object.extend({
        init:function (properties) {
            this._super(properties);
            var store = localStorage.getItem(get(this, 'name'));

            set(this, 'data', ( store && JSON.parse(store)) || {});

            require([ 'app/models/todo'],
                _.bind(function (ModelType) {
                    set(this, 'modelType', ModelType);
                }, this)
            );
        },

        createRecord:function (model) {
            if (!get(model, 'id')) {
                set(model, 'id', Date.now());
                return this.update(model);
            }
        },

        update:function (model) {
            var data = this.get('data');

            data[get(model, 'id')] = model.getProperties(
                'id', 'title', 'completed'
            );

            this._stash();

            this.get('all').addObject(model);
            return model;
        },

        // Delete a model from `this.data`, returning it.
        remove:function (model) {
            delete this.data[ model.get('id') ];
            this._stash();

            this.get('all').removeObject(model);
            return model;
        },

        all:Ember.computed(function () {
            var data = get(this, 'data') || {};
            var all = Ember.A([]);

            for (var keyName in data) {
                if (data.hasOwnProperty(keyName)) {
                    all.addObject(get(this, 'modelType').create(data[keyName]));
                }
            }

            return all;
        }).property('data'),


        // Save the current state of the **Store** to *localStorage*.
        _stash:function () {
            localStorage.setItem(get(this, 'name'), JSON.stringify(get(this, 'data')));
        }
    });

    return App.Store = Store;

});
