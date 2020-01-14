import { Component, OnInit } from '@angular/core';

import { TrackService } from '../shared/track.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'tat-track-list',
    templateUrl: './track-list.component.html',
    styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit
{

    // == fields ==
    tracks: any[] = [];

    // == constructors ==
    constructor(private trackService: TrackService) { } // contructor

    // == lifecycle methods ==
    ngOnInit() {
        // load tracks
        const trackObservable: Observable<any> = this.trackService.getTracks();
        trackObservable.subscribe(
            (tracks) => {
                this.tracks = tracks;
            },
            (error) => {

            },
            () => {

            }
        );
     } // ngOnInit

} // TrackListComponent
