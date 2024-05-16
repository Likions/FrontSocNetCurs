interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    friends: number[], // массив userId
    picturePath?: string,
    location?: string,
    occupation?: string,
    viewedProfile?: number, // кол-во гостей страницы
    impressions?: number, // лайки
}

interface Post {
    id: number,
    userId: number
    description: string,
    likes: number,
    comments: number[], // массив id комментариев
    picturePath?: string,
}

interface Comment {
    id: number,
    userId: number,
    content: string,
}

export default async function fetchUsers(ids: number[]) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(users.filter(user => ids.includes(user.id))), 100)
    });

    const result = await promise; // будет ждать, пока промис не выполнится (*)

    return result;
}


const users: User[] = [
    {
        id: 0,
        firstName: "Ivan",
        lastName: "Ivanov",
        email: "Ivanov@gmail.com",
        password: "123456",
        friends: [5, 6, 7, 8, 9],
        location: "Perm",
        occupation: "Interesting Job #1",
        viewedProfile: 77, // кол-во просмотров профиля
        impressions: 19, // лайки
    } as User,
    {
        id: 1,
        firstName: "Leonid",
        lastName: "Leonidov",
        email: "Leonidov@gmail.com",
        password: "123456",
        friends: [5, 6, 7, 8, 9],
        location: "Perm",
        occupation: "Interesting Job #2",
        viewedProfile: 111, // кол-во просмотров профиля
        impressions: 45, // лайки
    } as User,
    {
        id: 2,
        firstName: "Denis",
        lastName: "Denisov",
        email: "Denisov@gmail.com",
        password: "123456",
        friends: [5, 6, 7, 8, 9],
        location: "Perm",
        occupation: "Interesting Job #3",
        viewedProfile: 222, // кол-во просмотров профиля
        impressions: 35, // лайки
    } as User,
    {
        id: 3,
        firstName: "Gosha",
        lastName: "Goshin",
        email: "Goshin@gmail.com",
        password: "123456",
        friends: [5, 6, 7, 8, 9],
        location: "Perm",
        occupation: "Interesting Job #4",
        viewedProfile: 333, // кол-во просмотров профиля
        impressions: 65, // лайки
    } as User,
    {
        id: 4,
        firstName: "Petr",
        lastName: "Petrov",
        email: "Petrov@gmail.com",
        password: "123456",
        friends: [5, 6, 7, 8, 9],
        location: "Perm",
        occupation: "Interesting Job #5",
        viewedProfile: 306, // кол-во просмотров профиля
        impressions: 76, // лайки
    } as User,
    {
        id: 5,
        firstName: "Taras",
        lastName: "Tarasov",
        email: "Tarasov@gmail.com",
        password: "123456",
        friends: [0, 1, 2, 3, 4],
        location: "Perm",
        occupation: "Interesting Job #6",
        viewedProfile: 493, // кол-во просмотров профиля
        impressions: 85, // лайки
    } as User,
    {
        id: 6,
        firstName: "Igor",
        lastName: "Igorev",
        email: "Igorev@gmail.com",
        password: "123456",
        friends: [0, 1, 2, 3, 4],
        location: "Perm",
        occupation: "Interesting Job #7",
        viewedProfile: 674, // кол-во просмотров профиля
        impressions: 96, // лайки
    } as User,
    {
        id: 7,
        firstName: "Anton",
        lastName: "Antonov",
        email: "Antonov@gmail.com",
        password: "123456",
        friends: [0, 1, 2, 3, 4],
        location: "Perm",
        occupation: "Interesting Job #8",
        viewedProfile: 275, // кол-во просмотров профиля
        impressions: 47, // лайки
    } as User,
    {
        id: 8,
        firstName: "Dima",
        lastName: "Dmitriev",
        email: "Dmitriev@gmail.com",
        password: "123456",
        friends: [0, 1, 2, 3, 4],
        location: "Perm",
        occupation: "Interesting Job #9",
        viewedProfile: 851, // кол-во просмотров профиля
        impressions: 64, // лайки
    } as User,
    {
        id: 9,
        firstName: "Oleg",
        lastName: "Olegov",
        email: "Olegov@gmail.com",
        password: "123456",
        friends: [0, 1, 2, 3, 4],
        location: "Perm",
        occupation: "Interesting Job #10",
        viewedProfile: 523, // кол-во просмотров профиля
        impressions: 39, // лайки
    } as User,
]

const posts: Post[] = [
    {
        id: 0,
        userId: 0,
        description: "Прием-прием! Пост номер 1 пользователя номер 0",
        likes: 3,
        comments: [5,6,7,8,9],
    },
    {
        id: 1,
        userId: 0,
        description: "Прием-прием! Пост номер 2 пользователя номер 0",
        likes: 11,
        comments: [5,6,7,8,9],
    },
    {
        id: 2,
        userId: 1,
        description: "Прием-прием! Пост номер 1 пользователя номер 1",
        likes: 33,
        comments: [5,6,7,8,9],
    },
    {
        id: 3,
        userId: 1,
        description: "Прием-прием! Пост номер 2 пользователя номер 1",
        likes: 111,
        comments: [5,6,7,8,9],
    },
    {
        id: 4,
        userId: 2,
        description: "Прием-прием! Пост номер 1 пользователя номер 2",
        likes: 55,
        comments: [5,6,7,8,9],
    },
    {
        id: 5,
        userId: 2,
        description: "Прием-прием! Пост номер 2 пользователя номер 2",
        likes: 222,
        comments: [5,6,7,8,9],
    },
    {
        id: 6,
        userId: 3,
        description: "Прием-прием! Пост номер 1 пользователя номер 3",
        likes: 77,
        comments: [5,6,7,8,9],
    },
    {
        id: 7,
        userId: 3,
        description: "Прием-прием! Пост номер 2 пользователя номер 3",
        likes: 444,
        comments: [0,1,2,3,4],
    },
    {
        id: 8,
        userId: 4,
        description: "Прием-прием! Пост номер 1 пользователя номер 4",
        likes: 99,
        comments: [0,1,2,3,4],
    },
    {
        id: 9,
        userId: 4,
        description: "Прием-прием! Пост номер 2 пользователя номер 4",
        likes: 705,
        comments: [0,1,2,3,4],
    },
]

const comments: Comment[] = [
    {id: 0, userId: 0, content: "Топ прическа! Лайк за дерзость, комментарий за девственность 0 :)"},
    {id: 1, userId: 1, content: "Топ прическа! Лайк за дерзость, комментарий за девственность 1 :)"},
    {id: 2, userId: 2, content: "Топ прическа! Лайк за дерзость, комментарий за девственность 2 :)"},
    {id: 3, userId: 3, content: "Топ прическа! Лайк за дерзость, комментарий за девственность 3 :)"},
    {id: 4, userId: 4, content: "Топ прическа! Лайк за дерзость, комментарий за девственность 4 :)"},
    {id: 5, userId: 5, content: "Топ прическа! Лайк за дерзость, комментарий за девственность 5 :)"},
    {id: 6, userId: 6, content: "Топ прическа! Лайк за дерзость, комментарий за девственность 6 :)"},
    {id: 7, userId: 7, content: "Топ прическа! Лайк за дерзость, комментарий за девственность 7 :)"},
    {id: 8, userId: 8, content: "Топ прическа! Лайк за дерзость, комментарий за девственность 8 :)"},
    {id: 9, userId: 9, content: "Топ прическа! Лайк за дерзость, комментарий за девственность 9 :)"},
]