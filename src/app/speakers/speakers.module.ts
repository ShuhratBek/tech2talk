import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { SpeakerListComponent } from './speaker-list.component';
import { SpeakerService } from './speaker.service';
import { speakersRouting } from './speakers.routing';

@NgModule({
    imports: [
        speakersRouting,
        SharedModule
    ],
    declarations: [
        SpeakerListComponent
    ],
    providers: [
        SpeakerService
    ]
})
export class SpeakersModule {}
