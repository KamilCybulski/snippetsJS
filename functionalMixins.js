class Person {
    constructor(first, last){
        this.rename(first, last);
    }

    rename(first, last) {
        this.firstName = first;
        this.lastName = last;
        return this;
    }
}

const mark = new Person("Mark", "Jefferson")

//most basic mixin
const Speaking = {
    sayName() {
        return `Hi, my name is ${this.firstName}.`;
    },
    sayFullName(){
      return `Hello, my name is ${this.firstName} ${this.lastName}`;  
    }
}

Object.assign(Person.prototype, Speaking);

//functional mixin
const Speaking2 = (target) => {
    Object.assign(target, {
        sayName() {
        return `Hi, my name is ${this.firstName}.`;
        },
        sayFullName(){
        return `Hello, my name is ${this.firstName} ${this.lastName}`;  
        }
    })
}

Speaking2(Person.prototype);

//functional mixin factory
const functionalMixin = (behavior) =>
    (target) => Object.assign(target, behavior);

const Speaking3 = functionalMixin({
    sayName() {
        return `Hi, my name is ${this.firstName}.`;
        },
    sayFullName(){
        return `Hello, my name is ${this.firstName} ${this.lastName}`;  
        }
})

Speaking3(Person.prototype);

//Keep in mind when you define classes, the prototype methods are not //enumerable. So you don't have to test for hasOwnProperty() then iterating //over instance's methods. But that's not the case for mixins!
//We can fix it tho:

const anotherFunctionalMixin = (behavior) =>
    function (target) {
        for (let prop of Reflect.ownKeys(behavior)){
            if (!target[prop]){
                Object.defineProperty(target, prop, {
                    value: behavior[prop],
                    writable: true,
                    enumerable: false
                })
            }
        }
        return target;
    }

const Speaking4 = anotherFunctionalMixin({
    sayName() {
        return `Hi, my name is ${this.firstName}.`;
        },
    sayFullName(){
        return `Hello, my name is ${this.firstName} ${this.lastName}`;  
        }
})

Speaking4(Person.prototype);

//Also, there is a way of creating a functional mixin factory that would also allow us to define some constants. But we don't want these constants in each instance of the class, that would be stupid. We can have then in a mixin itself:

function functionalMixinConstants (behavior, constants = {}){
    const instanceKeys = Reflect.ownKeys(behavior),
          sharedKeys = Reflect.ownKeys(constants);

    function mixin (target) {
        for (let prop of instanceKeys) {
            if(!target[prop]){
                Object.defineProperty(target, prop, {
                    value: behavior[prop],
                    writable: true,
                    enumerable: false
                })
            }
        }
        return target;
    }

    for (let prop of sharedKeys){
        Object.defineProperty(mixin, prop, {
            value: constants[prop],
            enumerable: constants.propertyIsEnumerable(prop)
        })
    }
    return mixin;
}

const Say = functionalMixinConstants({
    say(stuff) {
        return `${this.firstName} says: ${stuff}`
    }
},
{
    pizza: "I like pizza",
    gibberish: "I have nothing interesting to say yo!"
})
Say(Person.prototype);

//So far our mixins do not play very nicely with instanceof operator. But we can fix that too. All we have to do is to add few lines to our functionalMixinConstants:

function functionalMixinConstants (behavior, constants = {}){
    const instanceKeys = Reflect.ownKeys(behavior),
          sharedKeys = Reflect.ownKeys(constants),
          tag = Symbol('isA');

    function mixin (target) {
        for (let prop of instanceKeys) {
            if(!target[prop]){
                Object.defineProperty(target, prop, {
                    value: behavior[prop],
                    writable: true,
                    enumerable: false
                })
            }
        }
        return target;
    }

    for (let prop of sharedKeys){
        Object.defineProperty(mixin, prop, {
            value: constants[prop],
            enumerable: constants.propertyIsEnumerable(prop)
        })
    }
    Object.defineProperty(mixin, Symbol.hasInstance, {value: (instance) => !!instance[tag] });
    return mixin;
}

const Say = functionalMixinConstants({
    say(stuff) {
        return `${this.firstName} says: ${stuff}`
    }
},
{
    pizza: "I like pizza",
    gibberish: "I have nothing interesting to say yo!"
})
Say(Person.prototype);