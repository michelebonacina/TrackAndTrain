import { Component, OnInit } from '@angular/core';

import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: '[tat-sidebar]',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit
{

    // icons initialization
    faTachometerAlt = faTachometerAlt;

    constructor() { }

    ngOnInit() { }

}
