# wrappable-object-js
WrappableObject: A lightweight and simple library to make javascript wrapable and inheritable.

```js

// ote: just a random name

var oteOld = new WrappableObject()
oteOld.test = function() {
    console.log("@Base object: do something")
}

var ote = new WrappableObject(oteOld)
ote._wrap('test', function(original) {
    return function() {
        console.log("1@ run this before")
        original();
        console.log("1@run this after")
        return "OK"
    }
})

ote._wrap('test', function(original) {
    return function() {
        console.log("2@ run this before")
        original();
        console.log("2@ run this after")
        return "OK"
    }
})

```
