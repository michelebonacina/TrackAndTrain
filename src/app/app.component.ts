import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { AuthenticationService } from './authentication/shared/authentication.service';
import { CommonService } from './common/shared/common.service';
import { BreadcrumbLevel } from './common/shared/breadcrumb-level';
import { MessageService } from './common/shared/message.service';
import { Note } from './common/shared/note';

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
    errors: Note[];
    messages: Note[];

    /**
     * Create a new component.
     * @param authenticationService service for user authentication management
     * @param commonService service for general purpuse operations
     * @param messageService service for messaging management
     * @param changeDetectorRef managing of page content changes
     */
    constructor(
        private authenticationService: AuthenticationService,
        private commonService: CommonService,
        private messageService: MessageService,
        private changeDetectorRef: ChangeDetectorRef

    ) { } // constructor

    /**
     * Component initialization.
     */
    ngOnInit()
    {
        // subscribe to breadcrumbs
        this.commonService.getBreadcrumbLevels().subscribe(
            (breadcrumbsLevels) => 
            {
                this.breadcrumbLevels = breadcrumbsLevels;
                this.changeDetectorRef.detectChanges();
            },
            (error) =>
            {
                // TODO: add generic error page
            }
        );
        // subscribe to errors
        this.messageService.getErrors().subscribe(
            (errors) => 
            {
                this.errors = errors;
                this.changeDetectorRef.detectChanges();
            },
            (error) =>
            {
                // TODO: add generic error page
            }
        );
        // subscribe to messaged
        this.messageService.getMessages().subscribe(
            (messages) => 
            {
                this.messages = messages;
                this.changeDetectorRef.detectChanges();
                setTimeout(
                    () =>
                    {
                        this.removeMessages();
                    }
                    , 3000
                );
            },
            (error) =>
            {
                // TODO: add generic error page
            }
        );
    } // ngOnInit

    /**
     * Checks if the breadcrumb is visible for the user.
     * @returns true if the breadcrumb should be visible, false otherwise
     */
    public isBreadcrumbVisible(): boolean
    {
        let visible: boolean = true;
        // breadcrumb not visible if user is not authenticated
        visible = visible && this.authenticationService.isUserAuthenticated();
        // breadcrumb not visible if message or error shown
        visible = visible && !this.isErrorVisible() && !this.isErrorVisible();
        // return visibility
        return visible;
    } // isBreadcrumbVisible

    /**
     * Checks if an error message have to be visible for the user.
     * @returns true if there's an error to be shown, false otherwise
     */
    public isErrorVisible(): boolean
    {
        // check visibility
        let visible: boolean = false;
        if (this.errors && this.errors.length > 0)
        {
            visible = true;
        }
        // return visibility
        return visible;
    } // isErrorVisible

    /**
     * Checks if a message have to be visible for the user.
     * @returns true if there's an error to be shown, false otherwise
     */
    public isMessageVisible(): boolean
    {
        // check visibility
        let visible: boolean = false;
        if (this.messages && this.messages.length > 0)
        {
            visible = true;
        }
        // return visibility
        return visible;
    } // isErrorVisible

    /**
     * Remove all errors.
     */
    removeErrors()
    {
        this.messageService.clearErrors();
    } // removeErrors

    /**
     * Remove all messages.
     */
    removeMessages()
    {
        this.messageService.clearMessages();
    } // removeErrors

} // AppComponent
