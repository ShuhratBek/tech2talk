import { Injectable } from '@angular/core';
import { Speaker } from './speaker';
import { SPEAKERS } from './mock-speaker';

@Injectable()
export class SpeakerService {
    getSpeakers(): Promise<Speaker[]> {
        return Promise.resolve(SPEAKERS);
    }
}
