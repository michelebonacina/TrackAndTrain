import { Component, OnInit, Input } from '@angular/core';

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

    @Input() track: any;        // track to be visualized
    @Input() index: number;     // ordinal track index

    /**
     * Create a new component.
     */
    constructor() { } // constructor

    /**
     * Component initialization.
     */
    ngOnInit() { } // ngOnInit

} // TrackListItem
