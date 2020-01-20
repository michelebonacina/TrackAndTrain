import { Component, OnInit, Input } from '@angular/core';

import { Activity } from '../shared/activity.model';
import { CommonService } from 'src/app/common/shared/common.service';

/**
 * Activity list item component.
 * Single activity visualization in a activity list.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Component({
    selector: '[tat-activity-list-item]',
    templateUrl: './activity-list-item.component.html',
    styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnInit
{

    @Input() activity: Activity;    // activity to be visualized
    @Input() index: number;         // ordinal track index

    icons: any = {};    // fontawesome icons

    /**
     * Create a new component.
     * @param commonService service for generic operations
     */
    constructor(
        private commonService: CommonService
    ) {
        this.icons = this.commonService.icons;
     } // constructor

    /**
     * Component initialization.
     */
    ngOnInit() { } // ngOnInit

} // ActivityListItemComponent
