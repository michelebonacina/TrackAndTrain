import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TrackComponent } from './track.component';
import { TrackListComponent } from './track-list/track-list.component';
import { TrackListItemComponent } from './track-list-item/track-list-item.component';
import { TrackService } from './shared/track.service';
import { TrackDetailComponent } from './track-detail/track-detail.component';

// == routing ==
const routes: Routes = [
    {
        path: 'track',
        component: TrackComponent,
        children: [
            { path: '', component: TrackListComponent },
            { path: ':trackId', component: TrackDetailComponent },
        ]
    }
]

// == module definition ==
@NgModule({
    declarations: [
        TrackComponent,
        TrackListComponent,
        TrackListItemComponent,
        TrackDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        TrackService
    ]
})
export class TrackModule { } // TrackModule
