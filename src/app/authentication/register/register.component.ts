import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthUser } from '../shared/auth-user.model';
import { AuthenticationService } from '../shared/authentication.service';

/**
 * Registration component.
 * Manages user registration.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Component({
    selector: 'tat-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit
{

    registerForm: FormGroup;    // register form data mapper

    /**
     * Creates a new component.
     * @param formBuilder form management
     * @param router router for navigation management
     * @param authenticationService service for user authentication management
     */
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { } // constructor

    /**
     * Component initialization.
     */
    ngOnInit()
    {
        // create registration form
        this.registerForm = this.formBuilder.group(
            {
                username: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
                email: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(128)]], // TODO Validator.pattern
                password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(32)]], // TODO Validator passwordConfirm
                passwordConfirm: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(32)]]
            }
        );
    } // ngOnInit

    /**
     * Register new user.
     */
    register()
    {
        if (this.registerForm.valid)
        {
            // the form data are correct
            // register user
            this.authenticationService.register(this.registerForm.value).subscribe(
                () =>
                {
                    // user registered
                    // go to confirm page
                    this.router.navigate(['/authentication/login']);
                },
                (error) =>
                {
                    // TODO
                }
            );
        }
    } // register

} // RegisterComponent
