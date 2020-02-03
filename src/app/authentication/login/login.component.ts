import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../shared/authentication.service';
import { CommonService } from 'src/app/common/shared/common.service';

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
     */
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private commonService: CommonService
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
                    // TODO
                }
            );
        }
    } // login

} // LoginCompenent
