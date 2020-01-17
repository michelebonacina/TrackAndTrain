import { Component, OnInit } from '@angular/core';
import { faRoute, faGrinBeamSweat, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

/**
 * Header component.
 * Top bar with search and menu management.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Component({
    selector: 'tat-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{

    // icons declaration
    icTrack = faRoute;
    icTrain = faGrinBeamSweat;
    icDashboard = faTachometerAlt;

    /**
     * Create a new component.
     */
    constructor() { } // constructor

    /**
     * Component initialization.
     */
    ngOnInit() { } // ngOnInit

} // HeaderComponent
