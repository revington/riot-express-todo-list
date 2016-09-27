'use strict';
var self = this;
var api = self.opts;
self.items = [];

self.on('mount', function () {
    console.log('mounted');
});
self.add = function (e) {
    var title = self.todo.value;
    api.create(title, function (err, xhr, todo) {
        if (xhr.status === 201) {
            self.todo.value = '';
            self.items.push(todo);
            self.update();
        }
    });
};
self.done = function (e) {
    e.item.done = true;
    api.update(e.item, function (err, xhr) {
        if (xhr.status !== 204) {
            e.item.done = false;
        }
    });
};
self.undone = function (e) {
    e.item.done = false;
    api.update(e.item, function (err, xhr) {
        if (xhr.status !== 204) {
            e.item.done = true;
        }
    });
};
