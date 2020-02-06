import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { Note } from './note';

@Injectable({
    providedIn: 'root'
})
export class MessageService
{

    private errorsObserver: Observer<Note[]>;   // error messages observer
    private messagesObserver: Observer<Note[]>;   // messages observer

    /**
     * Create a new service
     */
    constructor() { } // constructor

    /**
     * Returns errors messages.
     * @returns observalble error messages
     */
    public getErrors(): Observable<Note[]>
    {
        return new Observable<Note[]>(
            (observer) =>
            {
                this.errorsObserver = observer;
            }
        );
    } // getErrors

    /**
     * Notify a list of errors.
     * @param errors error list
     */
    public notifyErrors(errors: Note[])
    {
        if (this.errorsObserver)
        {
            this.errorsObserver.next(errors);
        }
    } // showErrors

    /**
     * Clear all errors.
     */
    public clearErrors()
    {
        this.notifyErrors([]);
    } // clearErrors

    /**
     * Extract messages from error response from API.
     * @param response error response 
     */
    public getErrorsFromAPI(response: any)
    {
        // initialize errors
        const errors: Note[] = [];
        if (response && response.error && response.error.errors)
        {
            // finded errors in response
            response.error.errors.forEach(
                (error) =>
                {
                    errors.push(new Note(error.title, error.details));
                }
            )
        }
        else 
        {
            // no standard errors in response
            errors.push(new Note());
        }
        // return errors
        return errors;
    } // getErrorsFromAPI

    /**
     * Returns messages.
     * @returns observalble messages
     */
    public getMessages(): Observable<Note[]>
    {
        return new Observable<Note[]>(
            (observer) =>
            {
                this.messagesObserver = observer;
            }
        );
    } // getMessages

    /**
     * Notify a list of messages.
     * @param messages message list
     */
    public notifyMessages(messages: Note[])
    {
        if (this.messagesObserver)
        {
            this.messagesObserver.next(messages);
        }
    } // notifyMessages

    /**
     * Clear all messages.
     */
    public clearMessages()
    {
        this.notifyMessages([]);
    } // clearMessages

} // MessageService
