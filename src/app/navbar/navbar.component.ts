import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { MenuService } from './menu.service';

@Component({
    selector: 'navbar',
    template: require('./navbar.component.html'),
    styles: [`
        .fill {
            flex: 1 1 auto;
        }
    `],
    providers: [MenuService]
})

export class NavbarComponent implements OnInit {
    menus: Menu[];

    constructor(private menuService: MenuService) { }

    getMenus(): void {
        this.menuService.getMenus().then(menus => this.menus = menus);
    }

    ngOnInit(): void {
        this.getMenus();
    }
}
