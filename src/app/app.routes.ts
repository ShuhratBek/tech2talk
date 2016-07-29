import { RouterConfig, provideRouter } from '@angular/router';
import { EventsComponent } from './events';

export const routes: RouterConfig = [
    {
        path: '',
        component: EventsComponent
    }
];
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
