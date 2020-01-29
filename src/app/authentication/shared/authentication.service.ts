import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthUser } from './auth-user.model';
import { Observable } from 'rxjs';

/**
 * Authentication Service.
 * Contains operation for authentication management.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService
{

    /**
     * Create a new service.
     * @param httpClient client for API invocation
     */
    constructor(
        private httpClient: HttpClient
    ) { } // constructor

    /**
     * Convert an authentication user received from API response into a managed authentication user.
     * @param apiAuthUser authentication user from API
     * @returns authentication user
     */
    public getAuthUserFromAPI(apiAuthUser: any): AuthUser
    {
        // get data from api authenticated user
        let authUser: AuthUser = null;
        if (apiAuthUser)
        {
            authUser = new AuthUser();
            authUser.id = apiAuthUser._id;
            authUser.username = apiAuthUser.username;
            authUser.email = apiAuthUser.email;
            authUser.password = apiAuthUser.password;
            authUser.passwordConfirm = apiAuthUser.passwordConfirm;
        }
        // return authenticated user
        return authUser;
    } // getAuthUserFromAPI

    /**
     * Convert a managed authentication user into an authentication user to send via API.
     * @param authUser authentication user to be converted
     * @returns API authentication user
     */
    public getAPIFromAuthUser(authUser: AuthUser): any
    {
        // set data to api authenticated user
        let apiAuthUser = null;
        if (authUser)
        {
            apiAuthUser = {};
            apiAuthUser._id = authUser.id;
            apiAuthUser.username = authUser.username;
            apiAuthUser.email = authUser.email;
            apiAuthUser.password = authUser.password;
            apiAuthUser.passwordConfirm = authUser.passwordConfirm;
        }
        // return api authenticated user
        return apiAuthUser;
    } // getAPIFromAuthUser


    /**
     * Register a new user.
     * @param authUser new user to register
     */
    public register(authUser: AuthUser) 
    {
        // return registered auth user
        return new Observable<AuthUser>(
            (observer) =>
            {
                // register user
                this.httpClient.post('/api/v1/user/register', this.getAPIFromAuthUser(authUser)).subscribe(
                    (findedAuthUser: any) =>
                    {
                        // return authenticated user
                        observer.next(this.getAuthUserFromAPI(findedAuthUser));
                        observer.complete();
                    },
                    (error) =>
                    {
                        // TODO
                    }
                );
            }
        );
    } // register

} // AuthenticationService
