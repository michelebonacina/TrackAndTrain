import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Activity } from './activity.model';
import { Observable } from 'rxjs';

/**
 * Activity Service.
 * Contains operation for activity management.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Injectable({
    providedIn: 'root'
})
export class ActivityService
{

    /**
     * Create a new service.
     * @param httpClient client for API invocation
     */
    constructor(
        private httpClient: HttpClient
    ) { } // constructor

    /**
     * Convert an activity received from API response into a managed activity.
     * @param apiActivity activity from API
     * @returns activity
     */
    public getActivityFromAPI(apiActivity: any): Activity
    {
        // get data from api activity
        let activity: Activity = null;
        if (apiActivity)
        {
            activity = new Activity();
            activity.id = apiActivity._id;
            activity.code = apiActivity.code;
            activity.name = apiActivity.name;
            activity.iconName = apiActivity.iconName;
        }
        // return activity
        return activity;
    } // getActivityFromAPI

    /**
     * Convert a managed activity into an activity to be sended via API.
     * @param activity activity to be converted
     * @returns API activity
     */
    public setActivityToAPI(activity: Activity): any
    {
        // set data to api activity
        let apiActivity = null;
        if (activity)
        {
            // activity is defined
            // only modificable field have to be sended to API
            apiActivity = {};
            apiActivity._id = activity.id;
            apiActivity.code = activity.code;
            apiActivity.name = activity.name;
            apiActivity.iconName = activity.iconName;

        }
        // return api activity
        return apiActivity;
    } // setActivityToAPI    

    /**
     * Load all activities from persistence.
     * @returns observable activities list
     */
    public getActivities(): Observable<Activity[]>
    {
        // return activity list
        return new Observable<Activity[]>(
            (observer) => 
            {
                // list activities
                this.httpClient.get('/api/v1/activity').subscribe(
                    (findedActivities: any[]) =>
                    {
                        // create activity list
                        const activities: Activity[] = [];
                        findedActivities.forEach(
                            (findedActivity: any) =>
                            {
                                activities.push(this.getActivityFromAPI(findedActivity));
                            }
                        );
                        // return activities
                        observer.next(activities);
                        observer.complete();
                    }
                );

            }
        );
    } // getActivities

    /**
     * Load aan activity from persistence.
     * @param id activity indentifier
     * @returns observable activity
     */
    public getActivityById(id: string): Observable<Activity>
    {
        return new Observable<Activity>(
            (observer) =>
            {
                // get activity
                this.httpClient.get('/api/v1/activity/' + id).subscribe(
                    (findedActivity: any) =>
                    {
                        observer.next(this.getActivityFromAPI(findedActivity));
                        observer.complete();
                    }
                );
            }
        );
    } // getActivityById

} // ActivityService
