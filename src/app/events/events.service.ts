import { Injectable } from '@angular/core';
import { Events } from './mock-events';

@Injectable()
export class EventsService {
    getItems() {
        return Promise.resolve(Events);
    }
}
