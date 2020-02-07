import { Injectable } from '@angular/core';
import
{
    faRoute, faGrinBeamSweat, faTachometerAlt, faCog, faPeopleCarry, faCogs, faIdCard, faMapMarkerAlt, faIgloo,
    faBicycle, faRunning, faHiking, faUser, faClock, faCalendar, faStopwatch, faMountain, faShoePrints, faSkiingNordic, faUserCircle, faSignInAlt, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import { Observable, Observer } from 'rxjs';

import { BreadcrumbLevel } from './breadcrumb-level';

/**
 * Service for general purpuse operations.
 * This service is used for:
 * - icons management
 * - breadcrumb management
 * - messages and error messages management
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Injectable({
    providedIn: 'root'
})
export class CommonService
{

    private breadcrumbLevels: BreadcrumbLevel[] = [];                   // breadcrumb levels for navigation
    private breadcrumbsLevelsObserver: Observer<BreadcrumbLevel[]>;     // breadcrumb levels observer

    // fontawesome icons used by the application
    icons: any = {
        common:
        {
            track: faRoute,
            train: faGrinBeamSweat,
            dashboard: faTachometerAlt,
            options: faCogs,
            activity: faPeopleCarry,
            waypointType: faMapMarkerAlt,
            setup: faCog,
            user: faUserCircle,
            login: faSignInAlt,
            register: faIdCard,
            logout: faSignOutAlt
        },
        activity:
        {
            bicycle: faBicycle,
            run: faRunning,
            hike: faHiking,
            skiup: faSkiingNordic,
        },
        waypointType: {
            mountain: faMountain,
            house: faHouzz,
            igloo: faIgloo
        },
        track:
        {
            time: faClock,
            date: faCalendar,
            duration: faStopwatch,
            distance: faShoePrints,
            ascent: faMountain,
            user: faUser
        }
    };

    /**
     * Create a new service.
     */
    constructor() { } // constructor

    /**
     * Returns current breadcrumb levels.
     * @returns observalble breadcrumb levels
     */
    public getBreadcrumbLevels(): Observable<BreadcrumbLevel[]>
    {
        return new Observable<BreadcrumbLevel[]>(
            (observer) =>
            {
                this.breadcrumbsLevelsObserver = observer;
                this.breadcrumbsLevelsObserver.next(this.breadcrumbLevels);
            }
        );
    } // getBreadcrubLevels

    /**
     * Add a new level to the breadcrumb stack.
     * @param breadcrumbLevel level to add
     */
    public addBreadcrumbLevel(breadcrumbLevel: BreadcrumbLevel)
    {
        this.breadcrumbLevels.push(breadcrumbLevel);
        this.breadcrumbsLevelsObserver.next(this.breadcrumbLevels);
    } // addBreadcrumbLevel

    /**
     * Remove all leveles from breadcrumb stack add a new one.
     * @param breadcrumbLevel level to add
     */
    public resetBreadcrumbLevels(breadcrumbLevel: BreadcrumbLevel)
    {
        this.breadcrumbLevels = [];
        this.addBreadcrumbLevel(breadcrumbLevel);
    } // resetBreadcrumbLevels

} // CommonService
