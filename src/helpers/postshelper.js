import { nanoid } from 'nanoid'

export const createpost = (value) => {
    let newpost = {
        id: nanoid(),
        value,
        date: new Date().toDateString(),
        comments: [],
    };

    return newpost
}