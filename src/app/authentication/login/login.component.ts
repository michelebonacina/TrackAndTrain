import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../shared/authentication.service';
import { CommonService } from 'src/app/common/shared/common.service';
import { MessageService } from 'src/app/common/shared/message.service';
import { Note } from 'src/app/common/shared/note';

/**
 * Login component.
 * Manages user authentication.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Component({
    selector: 'tat-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{

    loginForm: FormGroup;       // register form data mapper
    icons: any = {};            // fontawesome icons

    /**
     * Creates a new component.
     * @param formBuilder form management
     * @param router router for navigation management
     * @param authenticationService service for user authentication management
     * @param commonService service for generic operations
     * @param messageService service for messaging management
     */
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private commonService: CommonService,
        private messageService: MessageService
    )
    {
        // initialize icons
        this.icons = this.commonService.icons;
    } // constructor

    /**
     * Component initialization.
     */
    ngOnInit()
    {
        // create login form
        this.loginForm = this.formBuilder.group(
            {
                email: [null, [Validators.required]],
                password: [null, [Validators.required]],
            }
        );
    } // ngOnInit

    /**
     * Login user.
     * Get data from login form and call API for authentication
     */
    login()
    {
        // clear errors
        this.messageService.clearErrors();
        // check login data
        if (this.loginForm.valid)
        {
            // the form data are correct
            // login user
            this.authenticationService.login(this.loginForm.value).subscribe(
                (token: any) =>
                {
                    // user logged
                    // go to main page
                    this.router.navigate(['/']);
                },
                (error) =>
                {
                    // show login errors
                    this.messageService.notifyErrors(error);
                }
            );
        }
    } // login

    /**
     * Reset login form.
     */
    reset()
    {
        // reset form
        this.loginForm.reset();
        // clear errors
        this.messageService.clearErrors();
        this.messageService.notifyMessages([new Note("OK", "tutto ok")]);
    } // reset

} // LoginCompenent
