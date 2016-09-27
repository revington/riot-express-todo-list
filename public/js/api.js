'use strict';
(function (api) {
    var url = '/api/todos/';

    function extractIDFromResponse(xhr) {
        var location = xhr.getResponseHeader('location');
        var result = +location.slice(url.length);
        return result;
    }
    api.create = function createToDo(title, callback) {
        var xhr = new XMLHttpRequest();
        var todo = {
            title: title,
            done: false
        };
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (xhr.status === 201) {
                todo.id = extractIDFromResponse(xhr);
            }
            return callback(null, xhr, todo);
        };
        xhr.send(JSON.stringify(todo));
    };
    api.update = function createToDo(todo, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log('200');
            }
            return callback(null, xhr, todo);
        };
        xhr.send(JSON.stringify(todo));
    };
})(this.todoAPI = {});
