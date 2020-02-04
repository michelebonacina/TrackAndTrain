import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TrackService } from '../shared/track.service';
import { Track } from '../shared/track.model';
import { CommonService } from 'src/app/common/shared/common.service';
import { BreadcrumbLevel } from 'src/app/common/shared/breadcrumb-level';

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
     * @param commonService service for generic operations
     */
    constructor(
        private trackService: TrackService,
        private commonService: CommonService
    ) { } // contructor

    /**
     * Component initialization.
     */
    ngOnInit()
    {   
        // show breadcrumb level
        this.commonService.resetBreadcrumbLevels(new BreadcrumbLevel("Track", "/track"));
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
