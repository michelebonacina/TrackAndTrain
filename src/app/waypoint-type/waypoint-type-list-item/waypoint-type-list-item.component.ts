import { Component, OnInit, Input } from '@angular/core';

import { WaypointType } from '../shared/waypoint-type.model';
import { CommonService } from 'src/app/common/shared/common.service';

/**
 * Waypoint type list item component.
 * Single waypoint type visualization in a waypoint type list.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Component({
    selector: '[tat-waypoint-type-list-item]',
    templateUrl: './waypoint-type-list-item.component.html',
    styleUrls: ['./waypoint-type-list-item.component.scss']
})
export class WaypointTypeListItemComponent implements OnInit
{

    @Input() waypointType: WaypointType;    // waypoint type to be visualized
    @Input() index: number;                 // ordinal waypoint type index

    icons: any = {};    // fontawesome icons

    /**
     * Create a new component.
     * @param commonService service for generic operations
     */
    constructor(
        private commonService: CommonService
    )
    {
        this.icons = this.commonService.icons.waypointType;
    } // constructor

    /**
     * Component initialization.
     */
    ngOnInit() { } // ngOnInit

} // WaypointTypeListItemComponent
