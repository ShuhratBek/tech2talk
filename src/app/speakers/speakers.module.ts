import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdGridListModule } from '@angular2-material/grid-list';

import { SpeakerListComponent }    from './speaker-list.component';
import { SpeakerService } from './speaker.service';
import { speakersRouting } from './speakers.routing';
@NgModule({
    imports: [
        CommonModule,
        speakersRouting,
        MdCoreModule,
        MdButtonModule,
        MdCardModule,
        MdToolbarModule,
        MdInputModule,
        MdListModule,
        MdGridListModule
    ],
    declarations: [
        SpeakerListComponent
    ],
    providers: [
        SpeakerService
    ]
})
export class SpeakersModule {}
