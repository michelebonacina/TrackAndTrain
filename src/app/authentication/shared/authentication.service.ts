import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthUser } from './auth-user.model';
import * as moment from 'moment';

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
     * Decode token and gets user data.
     * @param token token to decode
     * @returns authenticated user
     */
    private decodeToken(token: string): AuthUser
    {
        // get data from token
        const jwt = new JwtHelperService();
        const decodedToken = jwt.decodeToken(token);
        // create authenticated user
        const user = new AuthUser();
        user.id = decodedToken.userId;
        user.username = decodedToken.username;
        user.email = decodedToken.email;
        user.expirationTime = decodedToken.exp;
        // return user
        return user;
    } // decodeToken

    /**
     * Save user token to session.
     * @param token user token to save
     */
    private saveToken(token: string)
    {
        // save token to session
        sessionStorage.setItem('tat-auth', token);
        // save user to session
        sessionStorage.setItem('tat-user', JSON.stringify(this.decodeToken(token)));
    } // saveToken

    /**
     * Get token from session
     */
    private getToken(): string
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
        return sessionStorage.getItem('tat-auth') != null
            && sessionStorage.getItem('tat-user') != null
            && moment().isBefore(moment.unix(this.getAuthenticatedUser().expirationTime))
    } // isUserAuthenticated

    /**
     * Login a user.
     * @param loginUser user to login
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
                        // TODO
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
        // clear session
        sessionStorage.clear();
    } // logout

    /**
     * Get authenticated user.
     * @returns authenticated user
     */
    public getAuthenticatedUser(): AuthUser
    {
        // get user from session
        const sessionUserString: string = sessionStorage.getItem('tat-user');
        let user: AuthUser;
        if (sessionUserString)
        {
            // convert session user to object
            const sessionUser = JSON.parse(sessionUserString);
            // initialize user
            user = new AuthUser();
            user.id = sessionUser.id;
            user.username = sessionUser.username;
            user.email = sessionUser.email;
            user.expirationTime = sessionUser.expirationTime;
        }
        return user;
    } // getAuthenticatedUser

} // AuthenticationService
