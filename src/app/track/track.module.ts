import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TrackComponent } from './track.component';
import { TrackListComponent } from './track-list/track-list.component';
import { TrackListItemComponent } from './track-list-item/track-list-item.component';
import { TrackService } from './shared/track.service';
import { TrackDetailComponent } from './track-detail/track-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthenticationGuard } from '../authentication/shared/authentication.guard';

// track routing
const routes: Routes = [
    {
        path: 'track',
        component: TrackComponent,
        children: [
            { path: '', component: TrackListComponent, canActivate: [AuthenticationGuard]  },
            { path: ':trackId', component: TrackDetailComponent, canActivate: [AuthenticationGuard]  },
        ]
    }
];

/**
 * Track module.
 * Main module for track management.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@NgModule({
    declarations: [
        TrackComponent,
        TrackListComponent,
        TrackListItemComponent,
        TrackDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FontAwesomeModule,
        HttpClientModule
    ],
    providers: [
        TrackService
    ]
})
export class TrackModule { } // TrackModule
