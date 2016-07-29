import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { SidenavComponent } from './sidenav';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        SidenavComponent,
        ROUTER_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES,
        MD_ICON_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES
    ],
    styles: [`
        * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .sidenav {
            min-width: 300px;
        }
    `]
})
export class AppComponent {

    constructor(private mdIconRegistry: MdIconRegistry) {
        mdIconRegistry
            .addSvgIcon('search', './icons/search.svg')
            .addSvgIcon('menu', './icons/menu.svg');
    }
}
