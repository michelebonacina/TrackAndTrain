import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: '[tat-track-list-item]',
    templateUrl: './track-list-item.component.html',
    styleUrls: ['./track-list-item.component.scss']
})
export class TrackListItemComponent implements OnInit
{

    // input variables
    @Input() track: any; 
    
    constructor() { } // constructor

    ngOnInit() { } // ngOnInit

} // TrackListItem
