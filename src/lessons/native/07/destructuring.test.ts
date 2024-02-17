let props: ManType

type ManType = {
    name: string
    age: number
    // lessons: Array<LessonType>
    // lessons: Array<{ title: string, name?: string }>
    lessons: Array<{ title: string; name?: string }>
    address: {
        street: {
            title: string
        }
    }
}

type LessonType = {
    title: string
}

beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'react'}],
        address: {
            street: {
                title: 'Nezavisimosti street',
            }
        }
    }
})

test('Object destructuring example', () => {
    // const age = props.age
    // const lessons = props.lessons
    const {age: a, lessons: l} = props
    const {title} = props.address.street

    expect(a).toBe(32)
    expect(l.length).toBe(3)
    expect(title).toBe('Nezavisimosti street')
})

test('Array destructuring example', () => {
    const lesson1 = props.lessons[0]
    const lesson2 = props.lessons[1]
    const lesson3 = props.lessons[2]

    const [, , l3] = props.lessons
    const [l1, , ...restLessons] = props.lessons

    expect(lesson1.title).toBe('1')
    expect(lesson2.title).toBe('2')
    expect(lesson3.title).toBe('3')

    expect(l1.title).toBe('1')
    // expect(l2.title).toBe('2')
    expect(l3.title).toBe('3')

    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')
    expect(restLessons[0].name).toBe('react')

    expect(restLessons[0]).toStrictEqual({name: 'react', title: '3'})
})