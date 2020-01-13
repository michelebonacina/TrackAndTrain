import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tat-track-list',
    templateUrl: './track-list.component.html',
    styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit
{

    tracks = [1, 2, 3, 4, 5];

    constructor() { } // contructor

    ngOnInit() { } // ngOnInit

} // TrackListComponent
