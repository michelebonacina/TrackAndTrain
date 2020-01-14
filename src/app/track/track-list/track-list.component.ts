import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tat-track-list',
    templateUrl: './track-list.component.html',
    styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit
{

    tracks = [
        {
            id: 1,
            date: "01-01-2020",
            time: "12:00",
            description: "Monte Misma",
            activity: "Mountain Bike",
            duration: "3:30",
            distance: 34,
            ascent: 600
        },
        {
            id: 2,
            date: "02-01-2020",
            time: "12:00",
            description: "Monte Misma",
            activity: "Mountain Bike",
            duration: "3:30",
            distance: 34,
            ascent: 600
        },
        {
            id: 3,
            date: "03-01-2020",
            time: "12:00",
            description: "Monte Misma",
            activity: "Mountain Bike",
            duration: "3:30",
            distance: 34,
            ascent: 600
        },
    ];

    constructor() { } // contructor

    ngOnInit() { } // ngOnInit

} // TrackListComponent
