import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ActivityComponent } from './activity.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityListItemComponent } from './activity-list-item/activity-list-item.component';
import { ActivityService } from './shared/activity.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
        HttpClientModule,
        FontAwesomeModule
    ],
    providers: [
        ActivityService
    ]
})
export class ActivityModule { } // ActivityModule
