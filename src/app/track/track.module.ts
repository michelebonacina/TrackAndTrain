import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TrackComponent } from './track.component';
import { TrackListComponent } from './track-list/track-list.component';

const routes: Routes = [
    {
        path: 'track',
        component: TrackComponent,
        children: [
            { path: '', component: TrackListComponent }
        ]
    }
]

@NgModule({
    declarations: [
        TrackComponent,
        TrackListComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class TrackModule { }
