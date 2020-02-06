import { Component, OnInit } from '@angular/core';

import { TrackService } from '../shared/track.service';
import { Track } from '../shared/track.model';
import { CommonService } from 'src/app/common/shared/common.service';
import { BreadcrumbLevel } from 'src/app/common/shared/breadcrumb-level';
import { MessageService } from 'src/app/common/shared/message.service';

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
     * @param messageService service for messages and error management
     */
    constructor(
        private trackService: TrackService,
        private commonService: CommonService,
        private messageService: MessageService
    ) { } // contructor

    /**
     * Component initialization.
     */
    ngOnInit()
    {
        // show breadcrumb level
        this.commonService.resetBreadcrumbLevels(new BreadcrumbLevel("Track", "/track"));
        // load tracks to be listed 
        this.trackService.getTracks().subscribe(
            (tracks) =>
            {
                // tracks loaded
                this.tracks = tracks;
            },
            (error) =>
            {
                // error loading tracks
                this.messageService.notifyErrors(error);
            },
            () => { }
        );
    } // ngOnInit

} // TrackListComponent
