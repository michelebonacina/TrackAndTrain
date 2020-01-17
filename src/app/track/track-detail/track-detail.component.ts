import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faRoute, faClock, faCalendar, faStopwatch, faShoePrints, faMountain } from '@fortawesome/free-solid-svg-icons';

import { TrackService } from '../shared/track.service';
import { Track } from '../shared/track.model';

/**
 * Track detail component.
 * Track data visualization.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Component({
    selector: 'tat-track-detail',
    templateUrl: './track-detail.component.html',
    styleUrls: ['./track-detail.component.scss']
})
export class TrackDetailComponent implements OnInit
{
    // icons declaration
    icTrack = faRoute;
    icTime = faClock;
    icDate = faCalendar;
    icDuration = faStopwatch;
    icDistance = faShoePrints;
    icAscent = faMountain;

    track: Track;   // track to be managed

    /**
     * Creates a new component.
     * @param route route service for navigation management
     * @param trackService track service
     */
    constructor(
        private route: ActivatedRoute,
        private trackService: TrackService
    ) { } // constructors

    /**
     * Component initialization.
     */
    ngOnInit()
    {
        // load track to visualize
        this.route.params.subscribe(
            (params) =>
            {
                this.getTrack(params['trackId']);
            }
        );
    } // ngOnInit

    /**
     * Load a track by his identifier.
     * Calls service for retrieving full track data.
     * @param trackId track identifier
     */
    getTrack(trackId: string)
    {
        // load full track data
        this.trackService.getTrackById(trackId).subscribe(
            (track: Track) =>
            {
                // track loaded
                this.track = track;
            },
            (error) =>
            {
                // TODO
            },
            () => { }
        )
    } // geTrack

} // TrackDetailComponent
