import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tat-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{

    // == fields ==
    title = "Track&Train";

    // == constructors ==
    constructor() { } // constructor

    // == lifecycle methods ==
    ngOnInit() { } // ngOnInit

} // HeaderComponent
