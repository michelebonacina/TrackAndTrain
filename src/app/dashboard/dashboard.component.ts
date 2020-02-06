import { Component, OnInit } from '@angular/core';

import { CommonService } from '../common/shared/common.service';
import { BreadcrumbLevel } from '../common/shared/breadcrumb-level';

/**
 * Dashboard component.
 * Dashboard data visualization.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Component({
    selector: 'tat-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit
{

    /**
     * Create a new component.
     * @param commonService service for generic operations
     */
    constructor(
        private commonService: CommonService
    ) { } // constructor

    /**
     * Component initialization.
     */
    ngOnInit()
    {
        // show breadcrumb level
        this.commonService.resetBreadcrumbLevels(new BreadcrumbLevel("Dashboard", "/"));
    } // ngOnInit

} // DashboardComponent
