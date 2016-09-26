import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdGridListModule } from '@angular2-material/grid-list';

import { FlexDirective } from './flex';
import { LayoutDirective } from './layout';

@NgModule({
    imports: [
        CommonModule,
        MdCoreModule,
        MdButtonModule,
        MdCardModule,
        MdToolbarModule,
        MdInputModule,
        MdListModule,
        MdGridListModule
    ],
    exports: [
        CommonModule,
        MdCoreModule,
        MdButtonModule,
        MdCardModule,
        MdToolbarModule,
        MdInputModule,
        MdListModule,
        MdGridListModule,
        FlexDirective,
        LayoutDirective
    ],
    declarations: [
        FlexDirective,
        LayoutDirective
    ]
})
export class SharedModule {}
