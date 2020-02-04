import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { AuthenticationService } from './authentication/shared/authentication.service';
import { CommonService } from './common/shared/common.service';
import { BreadcrumbLevel } from './common/shared/breadcrumb-level';

/**
 * Application component.
 * Main application component.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{

    breadcrumbLevels: BreadcrumbLevel[];

    /**
     * Create a new component.
     * @param authenticationService service for user authentication management
     * @param commonService service for general purpuse operations
     */
    constructor(
        private authenticationService: AuthenticationService,
        private commonService: CommonService,
        private changeDetectorRef: ChangeDetectorRef
        
    ) { } // constructor

    /**
     * Component initialization.
     */
    ngOnInit() {
        this.commonService.getBreadcrumbLevels().subscribe(
            (breadcrumbsLevels) => 
            {
                this.breadcrumbLevels = breadcrumbsLevels;
                this.changeDetectorRef.detectChanges();
            },
            (error) =>
            {
                // TODO
            }
        );
    } // ngOnInit

    /**
     * Checks if the breadcrumb is visible for the user;
     * @returns true if there's a user authenticated, false otherwise
     */
    public isBreadcrumbVisible(): boolean
    {
        let visible: boolean = true;
        // breadcrumb not visible if user is not authenticated
        visible = visible && this.authenticationService.isUserAuthenticated();
        // return visibility
        return visible;
    }

} // AppComponent
