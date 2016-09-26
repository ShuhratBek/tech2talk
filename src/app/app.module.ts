import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { SpeakersModule } from './speakers/speakers.module';
import { EventsModule } from './events';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared';

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
        SpeakersModule,
        EventsModule,
        SharedModule
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}
