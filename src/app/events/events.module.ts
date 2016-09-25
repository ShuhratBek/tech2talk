import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdGridListModule } from '@angular2-material/grid-list';

import { EventListComponent }    from './event-list.component';
import { EventService } from './event.service';
import { eventsRouting } from './events.routing';
@NgModule({
    imports: [
        CommonModule,
        eventsRouting,
        MdCoreModule,
        MdButtonModule,
        MdCardModule,
        MdToolbarModule,
        MdInputModule,
        MdListModule,
        MdGridListModule
    ],
    declarations: [
        EventListComponent
    ],
    providers: [
        EventService
    ]
})
export class EventsModule {}
