import { Component, OnInit } from '@angular/core';
import { faRoute, faGrinBeamSweat, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'tat-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
    // == icons ==
    icTrack = faRoute;
    icTrain = faGrinBeamSweat;
    icDashboard = faTachometerAlt;

    // == fields ==
    title = "Track&Train";

    // == constructors ==
    constructor() { } // constructor

    // == lifecycle methods ==
    ngOnInit() { } // ngOnInit

} // HeaderComponent
