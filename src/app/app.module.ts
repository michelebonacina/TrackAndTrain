import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';

import { TrackModule } from './track/track.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// == routing ==
const routes: Routes = [
    { path: '', component: DashboardComponent }
]

// == module definition ==
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FontAwesomeModule,
        TrackModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { } // AppModule
