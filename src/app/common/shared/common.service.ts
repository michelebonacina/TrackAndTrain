import { Injectable } from '@angular/core';
import
{
    faRoute, faGrinBeamSweat, faTachometerAlt, faCog, faPeopleCarry, faCogs, faIdCard
    , faBicycle, faRunning, faHiking, faUser, faClock, faCalendar, faStopwatch, faMountain, faShoePrints, faSkiingNordic, faUserCircle, faSignInAlt, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { BreadcrumbLevel } from './breadcrumb-level';
import { Observable, Observer } from 'rxjs';

/**
 * Service for general purpuse operations.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Injectable({
    providedIn: 'root'
})
export class CommonService
{

    private breadcrumbLevels: BreadcrumbLevel[] = [];     // breadcrumb levels for navigation
    private breadcrumbsLevelsObserver: Observer<BreadcrumbLevel[]>;

    // fontawesome icons used by the application
    icons: any = {
        common:
        {
            track: faRoute,
            train: faGrinBeamSweat,
            dashboard: faTachometerAlt,
            options: faCogs,
            activity: faPeopleCarry,
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
