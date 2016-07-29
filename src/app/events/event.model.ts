export interface IUser {
    name: string;
    avatar: string;
}

export interface IEvent {
    topic: string;
    loaction: string;
    author: IUser;
    language: string;
    time: number;
    description: string;
    broadcasting: boolean;
}