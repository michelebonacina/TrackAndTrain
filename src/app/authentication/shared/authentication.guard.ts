import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

/**
 * Authorizatione guard.
 * Checks the requested url and the user authentication state and choose if the url can be navigated
 * or if the navigation has to be redirected to another page.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Injectable({
    providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate
{

    private urlTo: string;    // url requested to going to

    /**
     * Create a new guard.
     * @param authenticationService service for user authentication management
     * @param router service for routing management
     */
    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { } // constructor

    /**
     * Checks if the requested url is for going to a free o to a proteced page.
     * @returns true if is a free page, false if is a protected page
     */
    private isFreePage(): boolean
    {
        // login and register are free page
        return this.urlTo.includes('login') || this.urlTo.includes('register');
    } // isFreePage

    /**
     * Manage requested url when the user is authenticated.
     * @return true if the url can be navigated, false otherwise
     */
    private handleAuthenticatedState(): boolean
    {
        // check requested url
        if (this.isFreePage())
        {
            // if destination is a free page redirect to dashboard
            this.router.navigate(['/']);
            return false;
        }
        else 
        {
            // if destination is a protected page, navigate to it
            return true;
        }
    } // handleAuthenticatedState

    /**
     * Manage requested url when the user is not authenticated.
     * @return true if the url can be navigated, false otherwise
     */
    private handleUnauthenticatedState(): boolean
    {
        // check requested url
        if (this.isFreePage())
        {
            // if destination is a free page, navigate to it
            return true;
        }
        else 
        {
            // if destination is a protected page redirect to login page
            this.router.navigate(['/authentication/login']);
            return false;
        }
    } // handleUnauthenticatedState

    /**
     * Check if the url requested to going to can be opened.
     * @param next 
     * @param state current state, containig the url to going to
     * @returns true if the url can be navigated, false otherwise
     */
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean
    {
        // get user requested to going to
        this.urlTo = state.url;
        // check state
        if (this.authenticationService.isUserAuthenticated())
        {
            // user is authenticated, manage authenticated state
            return this.handleAuthenticatedState()
        }
        else
        {
            // user is not authenticated, manage unauthenticated state
            return this.handleUnauthenticatedState();
        }
    } // canActivate

} // AuthGuard