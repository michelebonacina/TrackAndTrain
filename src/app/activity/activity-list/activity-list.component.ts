import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Activity } from '../shared/activity.model';
import { ActivityService } from '../shared/activity.service';
import { CommonService } from 'src/app/common/shared/common.service';
import { BreadcrumbLevel } from 'src/app/common/shared/breadcrumb-level';
import { MessageService } from 'src/app/common/shared/message.service';

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
    icons: any = {};                // fontawesome icons

    /**
     * Create a new component.
     * @param activityService service for activity management
     * @param commonService service for generic operations
     * @param messageService service for messages and errors management
     */
    constructor(
        private activityService: ActivityService,
        private commonService: CommonService,
        private messageService: MessageService
    )
    {
        this.icons = this.commonService.icons.common;
    } // constructor

    /**
     * Component initialization.
     */
    ngOnInit()
    {
        // show breadcrumb level
        this.commonService.resetBreadcrumbLevels(new BreadcrumbLevel("Activity", "/activity"));
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
                // error loading activities
                this.messageService.notifyErrors(this.messageService.getErrorsFromAPI(error));
            },
            () => { }
        );
    } // ngOnInit

} // ActivityListComponent
