import { Injectable } from '@angular/core';
import
{
    faRoute, faGrinBeamSweat, faTachometerAlt, faCog, faPeopleCarry, faCogs
    , faBicycle, faRunning, faHiking, faUser, faClock, faCalendar, faStopwatch, faMountain, faShoePrints, faSkiingNordic
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
        // logo
        track: faRoute,
        train: faGrinBeamSweat,
        // header menu
        dashboard: faTachometerAlt,
        options: faCogs,
        activity: faPeopleCarry,
        setup: faCog,
        user: faUser,
        // activity
        bicycle: faBicycle,
        run: faRunning,
        hike: faHiking,
        skiup: faSkiingNordic,
        // track
        time: faClock,
        date: faCalendar,
        duration: faStopwatch,
        distance: faShoePrints,
        ascent: faMountain
    };

    /**
     * Create a new service.
     */
    constructor() { } // constructor

} // CommonService
