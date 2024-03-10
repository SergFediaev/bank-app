const toDoListId1 = '1'
const toDoListId2 = '2'

const toDoLists = [
    {
        id: toDoListId1,
        title: 'What to learn',
        filter: 'all',
        // tasks: [
        //     {id: '1', title: 'HTML', isDone: false},
        //     {id: '2', title: 'CSS', isDone: false},
        //     {id: '3', title: 'ReactJS', isDone: true},
        // ]
    },
    {
        id: toDoListId2,
        title: 'What to buy',
        filter: 'all',
        // tasks: [
        //     {id: '1', title: 'HTML', isDone: false},
        //     {id: '2', title: 'CSS', isDone: false},
        //     {id: '3', title: 'ReactJS', isDone: true},
        // ]
    },
]

// const fn = () => 'user'
// const key = 40 + 1

const tasks = {
    [toDoListId1]: [
        {id: '3', title: 'HTML', isDone: false},
        {id: '4', title: 'CSS', isDone: false},
        {id: '5', title: 'ReactJS', isDone: true}
    ],
    [toDoListId2]: [
        {id: '6', title: 'Milk', isDone: false},
        {id: '7', title: 'Beer', isDone: false},
        {id: '8', title: 'Meat', isDone: true}
    ],
    // [key]: [],
    // [12 + 58]: [],
    // [12 > 58]: [],
    // [fn()]: []
}

console.log(tasks)
console.log(tasks[toDoListId1])

const toDoListTasks = tasks[toDoListId1]
const filteredTasks = toDoListTasks.filter(task => task.id !== '4')
const copyTasks = {...tasks}
copyTasks[toDoListId1] = filteredTasks

console.log(copyTasks)

const toDoListOk = [
    {id: '1', title: 'What to learn', filter: 'all'},
    {id: '2', title: 'What to buy', filter: 'all'},
    {id: '3', title: 'What to read', filter: 'all'},
] // O(n)

const objectToDoLists = {
    '1': {id: '1', title: 'What to learn', filter: 'all'},
    '2': {id: '2', title: 'What to buy', filter: 'all'},
    '3': {id: '3', title: 'What to read', filter: 'all'},
} // O(1)

const objToDoLists = {}

for (let iteration = 0; iteration < toDoListOk.length; iteration++) {
    objToDoLists[toDoListOk[iteration].id] = toDoListOk[iteration]
    // delete objToDoLists[toDoListOk[iteration].id].id // Из toDoListOk удаляются id.
}

console.log(objToDoLists)

const nums = [1, 2, 3, 4, 5]

console.log(nums.reduce((acc, el) => acc + el, 0))

console.log(toDoListOk.reduce((acc, el) => {
    acc[el.id] = el
    // delete acc[el.id].id
    return acc
}, {}))

console.log(toDoListOk.reduce((acc, el) => {
    if (el.id !== '2') {
        acc.push(el)
    }
    return acc
}, []))