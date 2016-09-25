import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent }    from './event-list.component';
const eventsRoutes: Routes = [
    { path: 'events',  component: EventListComponent }
];
export const eventsRouting: ModuleWithProviders = RouterModule.forChild(eventsRoutes);
