import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [
        AppComponent,
        HeaderComponent,
        SidebarComponent
    ]
})
export class AppModule { }
