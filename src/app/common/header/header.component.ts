import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tat-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{

    title = "Track&Train";

    constructor() { }

    ngOnInit() { }

}