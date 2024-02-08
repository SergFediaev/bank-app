test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take courses cheaper 160', () => {
    const courses = [
        {
            title: 'CSS',
            price: 110,
        },
        {
            title: 'JS',
            price: 200,
        },
        {
            title: 'React',
            price: 150,
        }
    ]

    const chipCourses = courses.filter(course => course.price < 160);

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].price).toBe(110)
    expect(chipCourses[1].price).toBe(150)
})

test('get only uncompleted tasks', () => {
    const tasks = [
        {
            id: 1,
            title: 'Bread',
            isDone: false,
        },
        {
            id: 2,
            title: 'Salt',
            isDone: true,
        },
        {
            id: 3,
            title: 'Sugar',
            isDone: false,
        },
        {
            id: 4,
            title: 'Milk',
            isDone: true,
        },
    ]

    const uncompletedTasks = tasks.filter(task => !task.isDone);

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].title).toBe('Bread')
    expect(uncompletedTasks[1].title).toBe('Sugar')
})