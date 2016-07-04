var objects;
(function (objects) {
    var Person = (function () {
        //CONSTRUCTORS ----------------
        function Person(name, age) {
            this._name = name;
            this._age = age;
        }
        //PUBLIC METHODS -----------------
        Person.prototype.Speaks = function () {
            console.log(this._name + " says Hello!");
        };
        return Person;
    }());
    objects.Person = Person;
})(objects || (objects = {}));
function init() {
    console.log("Game started!");
}
window.addEventListener("load", init);
//# sourceMappingURL=game.js.map