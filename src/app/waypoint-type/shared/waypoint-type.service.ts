import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WaypointType } from './waypoint-type.model';
import { Observable } from 'rxjs';

/**
 * Waypoint Type Service.
 * Contains operation for waypoint type management.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Injectable({
    providedIn: 'root'
})
export class WaypointTypeService
{

    /**
     * Creates a new component.
     * @param httpClient client for API invocation
     */
    constructor(
        private httpClient: HttpClient
    ) { } // constructor

    /**
     * Convert a waypoint type received from API response into a managed waypoint type.
     * @param apiWaypointType waypoint type from API
     * @returns waypoint type
     */
    public getWaypointTypeFromAPI(apiWaypointType: any): WaypointType
    {
        // get data from api waypoint type
        let waypointType: WaypointType = null;
        if (apiWaypointType)
        {
            waypointType = new WaypointType();
            waypointType.id = apiWaypointType._id;
            waypointType.code = apiWaypointType.code;
            waypointType.name = apiWaypointType.name;
            waypointType.iconName = apiWaypointType.iconName;
            waypointType.color = apiWaypointType.color;
        }
        // return waypoint type
        return waypointType;
    } // getWaypointTypeFromAPI

    /**
     * Convert a managed waypoint type into a waypoint type to be sended via API.
     * @param waypointType waypoint type to be converted
     * @returns API waypoint type
     */
    public getAPIFromWaypointType(waypointType: WaypointType): any
    {
        // set data to api waypoint type
        let apiWaypointType = null;
        if (waypointType)
        {
            // waypoint type is defined
            // only modificable field have to be sended to API
            apiWaypointType = {};
            apiWaypointType._id = waypointType.id;
            apiWaypointType.code = waypointType.code;
            apiWaypointType.name = waypointType.name;
            apiWaypointType.iconName = waypointType.iconName;
            apiWaypointType.color = waypointType.color;
        }
        // return api waypoint type
        return apiWaypointType;
    } // getAPIFromWaypointType

    /**
     * Load all waypoint types from persistence.
     * @returns observable for waypoint types list
     */
    public getWaypointTypes(): Observable<WaypointType[]>
    {
        // return waypoint type list
        return new Observable<WaypointType[]>(
            (observer) => 
            {
                // list waypoint types
                this.httpClient.get('/api/v1/waypoint-type').subscribe(
                    (findedWaypointTypes: any[]) =>
                    {
                        // create waypoint type list
                        const waypointTypes: WaypointType[] = [];
                        findedWaypointTypes.forEach(
                            (findedWaypointType: any) =>
                            {
                                waypointTypes.push(this.getWaypointTypeFromAPI(findedWaypointType));
                            }
                        );
                        // return waypoint types
                        observer.next(waypointTypes);
                        observer.complete();
                    }
                );
            }
        );
    } // getWaypointTypes

    /**
     * Load a waypoint type from persistence.
     * @param id waypoint type indentifier
     * @returns observable for waypoint type loaded
     */
    public getWaypointTypeById(id: string): Observable<WaypointType>
    {
        return new Observable<WaypointType>(
            (observer) =>
            {
                // get waypoint type
                this.httpClient.get('/api/v1/waypoint-type/' + id).subscribe(
                    (findedWaypointType: any) =>
                    {
                        observer.next(this.getWaypointTypeFromAPI(findedWaypointType));
                        observer.complete();
                    }
                );
            }
        );
    } // getWaypointTypeById

    /**
     * Create a new waypoint type into persistence.
     * @param waypointType waypoint type to be created
     * @returns observable for waypoint type creation
     */
    public createWaypointType(waypointType: WaypointType): Observable<WaypointType>
    {
        return new Observable<WaypointType>(
            (observer) =>
            {
                // get waypoint type
                this.httpClient.post('/api/v1/waypoint-type', this.getAPIFromWaypointType(waypointType)).subscribe(
                    (createdWaypointType: any) =>
                    {
                        observer.next(this.getWaypointTypeFromAPI(createdWaypointType));
                        observer.complete();
                    }
                );
            }
        );
    } // createWaypointType

} // WaypointTypeService
