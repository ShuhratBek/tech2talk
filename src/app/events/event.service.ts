import { Injectable } from '@angular/core';
import { Event } from './event';
import { EVENTS } from './mock-event';

@Injectable()
export class EventService {
    getEvents(): Promise<Event[]> {
        return Promise.resolve(EVENTS);
    }
}
