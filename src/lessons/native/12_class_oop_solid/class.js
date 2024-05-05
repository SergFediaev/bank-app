class UserClass {
    #name = ''

    constructor(name) {
        this.#name = name
    }

    get name() {
        return 'Mr. ' + this.#name
    }

    set name(value) {
        if (value === 'Igor') throw Error('Igor is not allowed name!')
        this.#name = value
    }

    hello() {
        console.log(`Hello, my name is ${this.#name} from UserClass`)
    }
}

const user = new UserClass('Dimych')
// user.name = 'Igor'
user.name = 'Viktor'
console.log(user.name)
user.hello()

console.log(user)
console.log(user.constructor.name)

class Coder extends UserClass {
    constructor(name, tech) {
        super(name)
        this.tech = tech
    }

    code() {
        console.log(`I am ${this.name} and coding on ${this.tech} right now...`)
    }

    hello() {
        super.hello()
        console.log(`In code I (${this.name}) trust!`)
    }
}

const coder = new Coder('coder Valera', 'C#')
coder.hello()
coder.code()