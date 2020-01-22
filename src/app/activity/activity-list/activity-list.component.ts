import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Activity } from '../shared/activity.model';
import { ActivityService } from '../shared/activity.service';

/**
 * Activity list component.
 * Activity list visualization.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Component({
    selector: 'tat-activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit
{

    activities: Activity[] = [];    // activities list

    /**
     * Create a new component.
     * @param activityService service for activity management
     */
    constructor(
        private activityService: ActivityService
    ) { } // constructor

    /**
     * Component initialization.
     */
    ngOnInit()
    {
        // load activities to be listed
        const activityObservable: Observable<Activity[]> = this.activityService.getActivities();
        activityObservable.subscribe(
            (activities) =>
            {
                // activities loaded
                this.activities = activities;
            },
            (error) =>
            {
                // TODO
            },
            () => { }
        );
    } // ngOnInit

} // ActivityListComponent
