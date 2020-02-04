import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import * as moment from 'moment';

import { AuthUser } from './auth-user.model';
import { MessageService } from 'src/app/common/shared/message.service';

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

    private authenticatedUser: AuthUser;        // authenticated user

    /**
     * Create a new service.
     * @param httpClient client for API invocation
     * @param messageService service for messaging management
     */
    constructor(
        private httpClient: HttpClient,
        private messageService: MessageService
    ) { } // constructor

    /**
     * Decode token and gets user data.
     * @param token token to decode
     */
    private decodeToken(token: string)
    {
        // get data from token
        const jwt = new JwtHelperService();
        const decodedToken = jwt.decodeToken(token);
        // create authenticated user
        this.authenticatedUser = new AuthUser();
        this.authenticatedUser.id = decodedToken.userId;
        this.authenticatedUser.username = decodedToken.username;
        this.authenticatedUser.email = decodedToken.email;
        this.authenticatedUser.expirationTime = decodedToken.exp;
    } // decodeToken

    /**
     * Save user token to session.
     * @param token user token to save
     */
    private saveToken(token: string)
    {
        // save token to session
        sessionStorage.setItem('tat-auth', token);
        // decode token
        this.decodeToken(token);
    } // saveToken

    /**
     * Get token from session
     */
    public getToken(): string
    {
        // get token from session
        const userToken = sessionStorage.getItem('tat-auth');
        // return token
        return userToken
    } // getToken

    /**
     * Register a new user.
     * @param registerUser new user to register
     */
    public register(registerUser: any) 
    {
        // return registered auth user
        return new Observable(
            (observer) =>
            {
                // register user
                this.httpClient.post('/api/v1/user/register', registerUser).subscribe(
                    () =>
                    {
                        // return registered user
                        observer.next();
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

    /**
     * Check user autentication.
     * @returns true if user is authentciated, false otherwise
     */
    public isUserAuthenticated(): boolean
    {
        // check user authentication and expiration time
        return sessionStorage.getItem('tat-auth')
            && this.authenticatedUser
            && moment().isBefore(moment.unix(this.getAuthenticatedUser().expirationTime))
    } // isUserAuthenticated

    /**
     * Login a user.
     * @param loginUser user to login // TODO change parameters to username,password
     */
    public login(loginUser: any) 
    {
        // return logged user
        return new Observable(
            (observer) =>
            {
                // login user
                this.httpClient.post('/api/v1/user/login', loginUser).subscribe(
                    (userToken: any) =>
                    {
                        // save token
                        this.saveToken(userToken);
                        // return logged user
                        observer.next();
                        observer.complete();
                    },
                    (error) =>
                    {
                        // authentication error
                        observer.error(this.messageService.getErrorsFromAPI(error));
                    }
                );
            }
        );
    } // login

    /**
     * Logout a user.
     */
    public logout() 
    {
        // clear session and user
        sessionStorage.clear();
        this.authenticatedUser = undefined;
    } // logout

    /**
     * Get authenticated user.
     * @returns authenticated user
     */
    public getAuthenticatedUser(): AuthUser
    {
        return this.authenticatedUser;
    } // getAuthenticatedUser

} // AuthenticationService
