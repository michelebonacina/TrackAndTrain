import { Component, OnInit } from '@angular/core';

import { faBell, faEnvelope, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: '[tat-header]',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{

    faBell = faBell;
    faEnvelope = faEnvelope;
    faSearch = faSearch;
    faUserCircle = faUserCircle;

    constructor() { }

    ngOnInit() { }

}
