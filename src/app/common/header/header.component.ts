import { Component, OnInit } from '@angular/core';
import { faRoute, faGrinBeamSweat, faTachometerAlt, faCog, faPeopleCarry, faCogs } from '@fortawesome/free-solid-svg-icons';

import { CommonService } from '../shared/common.service';
import { AuthenticationService } from 'src/app/authentication/shared/authentication.service';
import { Router } from '@angular/router';

/**
 * Header component.
 * Top bar with search form and menu management.
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
     * @param authenticationService service for user authentication management
     * @param router router for navigation management
     */
    constructor(
        private commonService: CommonService,
        private authenticationService: AuthenticationService,
        private router: Router
    )
    {
        // initialize icons
        this.icons = this.commonService.icons;
    } // constructor

    /**
     * Component initialization.
     */
    ngOnInit() { } // ngOnInit

    /**
     * Check if there's a user authenticated.
     * @returns true if the user is authenticated, false otherwise
     */
    public isUserAuthenticated(): boolean
    {
        return this.authenticationService.isUserAuthenticated();
    } // isUserAuthenticated

    /**
     * Logout user from application.
     */
    public logout()
    {
        // logout user
        this.authenticationService.logout();
        // go to login page
        this.router.navigate(["/authentication/login"]);

    } // logout

} // HeaderComponent
