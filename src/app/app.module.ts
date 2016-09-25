import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';

import { SpeakersModule } from './speakers/speakers.module';
import { EventsModule } from './events';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {AboutComponent} from './about/about.component';
import {NavbarComponent} from './navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing,
        MdCoreModule,
        MdButtonModule,
        MdCardModule,
        MdToolbarModule,
        MdInputModule,
        MdListModule,
        SpeakersModule,
        EventsModule
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}
