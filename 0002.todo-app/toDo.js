angular.module('toDoApp', [])
    .controller('ToDoController', function () {
        var toDoList = this;

        toDoList.toDos = [
            {text: 'learn AngularJS', done: true},
            {text: 'build an AngularJS app', done: false}
        ];

        toDoList.addTodo = function () {
            toDoList.toDos.push({text: toDoList.toDoText, done: false});
            toDoList.toDoText = '';
        };

        toDoList.remaining = function () {
            var count = 0;
            angular.forEach(toDoList.toDos, function (todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        toDoList.archive = function () {
            var oldTodos = toDoList.toDos;
            toDoList.toDos = [];
            angular.forEach(oldTodos, function (todo) {
                if (!todo.done) toDoList.toDos.push(todo);
            });
        };
    });