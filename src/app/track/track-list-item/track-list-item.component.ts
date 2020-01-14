import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: '[tat-track-list-item]',
    templateUrl: './track-list-item.component.html',
    styleUrls: ['./track-list-item.component.scss']
})
export class TrackListItemComponent implements OnInit
{

    // == fields == 
    @Input() track: any; 
    
    // == constructors ==
    constructor() { } // constructor

    // == lifecycle methods ==
    ngOnInit() { } // ngOnInit

} // TrackListItem
