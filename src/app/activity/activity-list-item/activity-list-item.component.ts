import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../shared/activity.model';

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

    /**
     * Create a new component.
     */
    constructor() { } // constructor

    /**
     * Component initialization.
     */
    ngOnInit() { } // ngOnInit

} // ActivityListItemComponent
