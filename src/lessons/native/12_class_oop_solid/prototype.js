function UserFunctionConstructor(name) {
    this.name = name
}

UserFunctionConstructor.prototype.hello = function () {
    console.log(`Hello, my name is ${this.name} from UserFunctionConstructor`)
}

const user = new UserFunctionConstructor('Dimych')
user.hello()

console.log(user)
console.log(user.constructor.name)