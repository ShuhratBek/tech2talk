import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeakerListComponent }    from './speaker-list.component';
const speakersRoutes: Routes = [
    { path: 'speakers',  component: SpeakerListComponent }
    // { path: 'hero/:id', component: HeroDetailComponent }
];
export const speakersRouting: ModuleWithProviders = RouterModule.forChild(speakersRoutes);
