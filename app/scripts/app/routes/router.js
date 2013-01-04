require([
    'app/app'
], function (App) {

    App.Router.map(function (match) {
        match("/").to("todos", function (match) {
            match("/").to("allTodos");
            match("/active").to("activeTodos");
            match("/completed").to("completedTodos");
        });
    });
});