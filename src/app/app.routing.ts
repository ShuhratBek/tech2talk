import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './about/about.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'about', component: AboutComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
