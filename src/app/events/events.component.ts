import { Component, OnInit } from '@angular/core';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { EventsService } from './events.service';
import { IEvent } from './event.model';
import { DateFormatPipe } from 'angular2-moment/DateFormatPipe';

@Component({
    selector: 'events',
    templateUrl: 'app/events/events.component.html',
    directives: [
        MD_ICON_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MD_CARD_DIRECTIVES
    ],
    providers: [
        EventsService
    ],
    pipes: [DateFormatPipe]
})
export class EventsComponent implements OnInit {
    items: Array<IEvent>;

    constructor(private eventService: EventsService) {

    }

    getItems() {
        this.eventService.getItems().then(items => this.items = items);
    }

    ngOnInit() {
        this.getItems();
    }
}
