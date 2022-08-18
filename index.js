
const receivesAFunction = function (callback) {
    callback()
}

const returnsANamedFunction = function () {
    return function namedFunction() {

    }
}

const returnsAnAnonymousFunction = function() {
    return function () {
        
    }
}