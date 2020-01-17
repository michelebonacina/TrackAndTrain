import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ActivityComponent } from './activity.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityListItemComponent } from './activity-list-item/activity-list-item.component';

// activity routing
const routes: Routes = [
    {
        path: 'activity',
        component: ActivityComponent,
        children: [
            { path: '', component: ActivityListComponent }
        ]
    }
];

/**
 * Activity module.
 * Main module for activity management.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@NgModule({
    declarations: [
        ActivityComponent,
        ActivityListComponent,
        ActivityListItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClient
    ]
})
export class ActivityModule { } // ActivityModule
