import { Component, OnInit, Input } from '@angular/core';

import { Track } from '../shared/track.model';
import { CommonService } from 'src/app/common/shared/common.service';

/**
 * Track list item component.
 * Single track visualization in a track list.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Component({
    selector: '[tat-track-list-item]',
    templateUrl: './track-list-item.component.html',
    styleUrls: ['./track-list-item.component.scss']
})
export class TrackListItemComponent implements OnInit
{

    @Input() track: Track;      // track to be visualized
    @Input() index: number;     // ordinal track index

    icons: any = {};    // fontawesome icons

    /**
     * Create a new component.
     *  @param commonService service for generic operations
     */
    constructor(
        private commonService: CommonService
    ) {
        this.icons = this.commonService.icons.activity;
     } // constructor

    /**
     * Component initialization.
     */
    ngOnInit() { } // ngOnInit

} // TrackListItem
