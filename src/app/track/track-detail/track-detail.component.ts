import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faRoute, faClock, faCalendar, faStopwatch, faShoePrints, faMountain } from '@fortawesome/free-solid-svg-icons';

import { TrackService } from '../shared/track.service';
import { Track } from '../shared/track.model';
import { CommonService } from 'src/app/common/shared/common.service';
import { BreadcrumbLevel } from 'src/app/common/shared/breadcrumb-level';
import { MessageService } from 'src/app/common/shared/message.service';

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

    track: Track;               // track to be managed
    trackIcons: any = {};       // fontawesome track icons
    activityIcons: any = {};    // fontawesome activity icons

    /**
     * Creates a new component.
     * @param route route service for navigation management
     * @param trackService track service
     * @param commonService service for generic operations
     * @param messageService service for messages and errors management
     */
    constructor(
        private route: ActivatedRoute,
        private trackService: TrackService,
        private commonService: CommonService,
        private messageService: MessageService
    ) { } // constructors

    /**
     * Component initialization.
     */
    ngOnInit()
    {
        // initialize icons
        this.trackIcons = this.commonService.icons.track;
        this.activityIcons = this.commonService.icons.activity;
        // load track to visualize
        this.route.params.subscribe(
            (params) =>
            {
                // show breadcrumb level
                this.commonService.addBreadcrumbLevel(new BreadcrumbLevel("Detail", "/track/" + params['trackId']));
                // load track
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
                // error loading track
                this.messageService.notifyErrors(error);
            },
            () => { }
        )
    } // geTrack

} // TrackDetailComponent


