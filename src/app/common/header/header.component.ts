import { Component, OnInit } from '@angular/core';
import { faRoute, faGrinBeamSweat, faTachometerAlt, faCog, faPeopleCarry, faCogs } from '@fortawesome/free-solid-svg-icons';

import { CommonService } from '../shared/common.service';

/**
 * Header component.
 * Top bar with search and menu management.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Component({
    selector: 'tat-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{

    icons: any = {};    // fontawesome icons

    /**
     * Create a new component.
     * @param commonService service for generic operations
     */
    constructor(
        private commonService: CommonService
    )
    {
        this.icons = this.commonService.icons;
    } // constructor

    /**
     * Component initialization.
     */
    ngOnInit() { } // ngOnInit

} // HeaderComponent
