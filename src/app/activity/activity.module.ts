import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActivityService } from './shared/activity.service';
import { ActivityComponent } from './activity.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityListItemComponent } from './activity-list-item/activity-list-item.component';
import { ActivityCreateComponent } from './activity-create/activity-create.component';

// activity routing
const routes: Routes = [
    {
        path: 'activity',
        component: ActivityComponent,
        children: [
            { path: '', component: ActivityListComponent },
            { path: 'new', component: ActivityCreateComponent }
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
        ActivityListItemComponent,
        ActivityCreateComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        ActivityService
    ]
})
export class ActivityModule { } // ActivityModule
