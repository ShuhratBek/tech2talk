import { Component, OnInit } from '@angular/core';
import { Speaker } from './speaker';
import { SpeakerService } from './speaker.service';

@Component({
    selector: 'speaker-list',
    template: require('./speaker-list.component.html'),
    providers: [SpeakerService]
})

export class SpeakerListComponent implements OnInit {
    speakers: Speaker[];
    imgUrl: string = 'https://upsa.epam.com/workload/photo/';
    constructor(private speakerService: SpeakerService) { }

    getSpeakers(): void {
        this.speakerService.getSpeakers().then(speakers => this.speakers = speakers);
    }

    ngOnInit(): void {
        this.getSpeakers();
    }
}
