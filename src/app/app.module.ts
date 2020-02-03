import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';

import { TrackModule } from './track/track.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonService } from './common/shared/common.service';
import { ActivityModule } from './activity/activity.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationGuard } from './authentication/shared/authentication.guard';

// application routing
const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthenticationGuard] }
]

/**
 * Application module.
 * Main application module.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
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
        TrackModule,
        ActivityModule,
        AuthenticationModule
    ],
    providers: [
        CommonService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { } // AppModule
