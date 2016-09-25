import { Speaker } from '../speakers/speaker';
export class Event {
    id: number;
    title: string;
    speakers: Speaker[];
    date: string;
    location: string;
    agenda: Array<string>;
    slides: string[];
}
