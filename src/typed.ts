export interface IUser {
    id : string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    posts : Post[]
}

export interface Post {
    id : string;
    title: string;
    content? : string;
    published: Boolean;
    authorId: string
}

export interface IUserCreate {
    name: string;
    email: string;
    password: string;
}