import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationGuard } from '../authentication/shared/authentication.guard';
import { WaypointTypeComponent } from './waypoint-type.component';
import { WaypointTypeCreateComponent } from './waypoint-type-create/waypoint-type-create.component';
import { WaypointTypeListComponent } from './waypoint-type-list/waypoint-type-list.component';
import { WaypointTypeListItemComponent } from './waypoint-type-list-item/waypoint-type-list-item.component';
import { WaypointTypeService } from './shared/waypoint-type.service';

// waypoint type routing
const routes: Routes = [
    {
        path: 'waypoint-type',
        component: WaypointTypeComponent,
        children: [
            { path: '', component: WaypointTypeListComponent, canActivate: [AuthenticationGuard] },
            { path: 'new', component: WaypointTypeCreateComponent, canActivate: [AuthenticationGuard] }
        ]
    }
];

/**
 * Waypoint Type module.
 * Main module for waypoint type management.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@NgModule({
    declarations: [
        WaypointTypeComponent,
        WaypointTypeCreateComponent,
        WaypointTypeListComponent,
        WaypointTypeListItemComponent
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
        WaypointTypeService
    ]
})
export class WaypointTypeModule { }
