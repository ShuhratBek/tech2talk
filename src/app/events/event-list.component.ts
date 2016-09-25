import { Component, OnInit } from '@angular/core';
import { Event } from './event';
import { EventService } from './event.service';

@Component({
    selector: 'event-list',
    template: require('./event-list.component.html'),
    providers: [EventService]
})

export class EventListComponent implements OnInit {
    events: Event[];
    imgUrl: string = 'https://upsa.epam.com/workload/photo/';

    constructor(private eventService: EventService) { }

    getEvents(): void {
        this.eventService.getEvents().then(events => this.events = events);
    }

    ngOnInit(): void {
        this.getEvents();
    }
}
