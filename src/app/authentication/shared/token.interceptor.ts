import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

/**
 * Http request interceptor.
 * Intercept calls to http API for managing information.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor
{

    /**
     * Create a new interceptor.
     * @param authenticationService service for user authentication management
     */
    constructor(
        public authenticationService: AuthenticationService
    ) { } // constructor

    /**
     * Intercept http API call and adds token to request header.
     * @param request request to the server
     * @param next next middleware
     * @returns observable for next request event
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        // get the user token
        const token = this.authenticationService.getToken();
        if (token)
        {
            // insert token into http request header
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
        }
        // call next middleware step
        return next.handle(request);
    } // intercept

} // TokenInterceptor
