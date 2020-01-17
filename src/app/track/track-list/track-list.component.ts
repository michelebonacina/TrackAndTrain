import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TrackService } from '../shared/track.service';
import { Track } from '../shared/track.model';

/**
 * Track list component.
 * Track list visualization.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Component({
    selector: 'tat-track-list',
    templateUrl: './track-list.component.html',
    styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit
{

    tracks: Track[] = [];   // tracks list

    /**
     * Create a new component.
     * @param trackService service for track management
     */
    constructor(
        private trackService: TrackService
    ) { } // contructor

    /**
     * Component initialization.
     * 
     */
    ngOnInit()
    {
        // load tracks to be listed 
        const trackObservable: Observable<Track[]> = this.trackService.getTracks();
        trackObservable.subscribe(
            (tracks) =>
            {
                // tracks loaded
                this.tracks = tracks;
            },
            (error) =>
            {
                // TODO
            },
            () => { }
        );
    } // ngOnInit

} // TrackListComponent
