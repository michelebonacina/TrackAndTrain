import { Injectable } from '@angular/core';
import
{
    faRoute, faGrinBeamSweat, faTachometerAlt, faCog, faPeopleCarry, faCogs, faIdCard
    , faBicycle, faRunning, faHiking, faUser, faClock, faCalendar, faStopwatch, faMountain, faShoePrints, faSkiingNordic, faUserCircle, faSignInAlt, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

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

} // CommonService
