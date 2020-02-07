import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { WaypointType } from '../shared/waypoint-type.model';
import { CommonService } from 'src/app/common/shared/common.service';
import { MessageService } from 'src/app/common/shared/message.service';
import { BreadcrumbLevel } from 'src/app/common/shared/breadcrumb-level';
import { WaypointTypeService } from '../shared/waypoint-type.service';

/**
 * Waypoint Type list component.
 * Waypoint Type list visualization.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Component({
    selector: 'tat-waypoint-type-list',
    templateUrl: './waypoint-type-list.component.html',
    styleUrls: ['./waypoint-type-list.component.scss']
})
export class WaypointTypeListComponent implements OnInit
{

    waypointTypes: WaypointType[] = [];    // waypoint type list

    /**
     * Create a new component.
     * @param waypointTypeService service for waypoint type management
     * @param commonService service for generic operations
     * @param messageService service for messages and errors management
     */
    constructor(
        private waypointTypeService: WaypointTypeService,
        private commonService: CommonService,
        private messageService: MessageService
    ) { } // constructor

    /**
     * Component initialization.
     */
    ngOnInit()
    {
        // show breadcrumb level
        this.commonService.resetBreadcrumbLevels(new BreadcrumbLevel("Waypoint Type", "/waypoint-type"));
        // load waypoint types to be listed
        const waypointTypeObservable: Observable<WaypointType[]> = this.waypointTypeService.getWaypointTypes();
        waypointTypeObservable.subscribe(
            (waypointTypes) =>
            {
                // waypoint types loaded
                this.waypointTypes = waypointTypes;
            },
            (error) =>
            {
                // error loading waypoint types
                this.messageService.notifyErrors(this.messageService.getErrorsFromAPI(error));
            },
            () => { }
        );
    } // ngOnInit

} // WaypointTypeListComponent
