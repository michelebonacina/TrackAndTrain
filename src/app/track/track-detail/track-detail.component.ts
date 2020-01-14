import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TrackService } from '../shared/track.service';
import { Track } from '../shared/track.model';

@Component({
    selector: 'tat-track-detail',
    templateUrl: './track-detail.component.html',
    styleUrls: ['./track-detail.component.scss']
})
export class TrackDetailComponent implements OnInit
{
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
    getTrack(trackId: number)
    {
        this.trackService.getTrackById(trackId).subscribe(
            (track) =>
            {
                this.track = track;
            },
            (error) => { },
            () => { }
        )
    }

} // TrackDetailComponent
