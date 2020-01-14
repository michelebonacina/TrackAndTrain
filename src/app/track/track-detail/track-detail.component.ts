import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faRoute, faClock, faCalendar, faStopwatch, faShoePrints, faMountain } from '@fortawesome/free-solid-svg-icons';

import { TrackService } from '../shared/track.service';
import { Track } from '../shared/track.model';

@Component({
    selector: 'tat-track-detail',
    templateUrl: './track-detail.component.html',
    styleUrls: ['./track-detail.component.scss']
})
export class TrackDetailComponent implements OnInit
{
    // == icons ==
    icTrack = faRoute;
    icTime = faClock;
    icDate = faCalendar;
    icDuration = faStopwatch;
    icDistance = faShoePrints;
    icAscent = faMountain;

    // == fields ==
    track: Track;

    // == constructors ==
    constructor(
        private route: ActivatedRoute,
        private trackService: TrackService
    ) { } // constructors

    // == lifecycle methods ==
    ngOnInit()
    {
        this.route.params.subscribe(
            (params) =>
            {
                this.getTrack(params['trackId']);
            }
        );
    } // ngOnInit

    // == public methods ==
    // load a track by his id
    getTrack(trackId: string)
    {
        this.trackService.getTrackById(trackId).subscribe(
            (track: Track) =>
            {
                this.track = track;
            },
            (error) => { },
            () => { }
        )
    }

} // TrackDetailComponent
