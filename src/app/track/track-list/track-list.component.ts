import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TrackService } from '../shared/track.service';
import { Track } from '../shared/track.model';

@Component({
    selector: 'tat-track-list',
    templateUrl: './track-list.component.html',
    styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit
{

    // == fields ==
    tracks: Track[] = [];

    // == constructors ==
    constructor(private trackService: TrackService) { } // contructor

    // == lifecycle methods ==
    ngOnInit() {
        // load tracks
        const trackObservable: Observable<Track[]> = this.trackService.getTracks();
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
