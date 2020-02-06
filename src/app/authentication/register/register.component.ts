import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../shared/authentication.service';
import { CommonService } from 'src/app/common/shared/common.service';
import { MessageService } from 'src/app/common/shared/message.service';
import { Note } from 'src/app/common/shared/note';

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
    icons: any = {};            // fontawesome icons

    /**
     * Creates a new component.
     * @param formBuilder form management
     * @param router router for navigation management
     * @param authenticationService service for user authentication management
     * @param commonService service for generic operations,
     * @param messageService service for messages and errors management
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
        // check form
        if (this.registerForm.valid)
        {
            // the form data are correct
            // register user
            this.authenticationService.register(this.registerForm.value).subscribe(
                () =>
                {
                    // user registered
                    this.messageService.notifyMessages([new Note("Registration", "User added. Now you can login.")]);
                    // go to confirm page
                    this.router.navigate(['/authentication/login']);
                },
                (error) =>
                {
                    // user not registered
                    this.messageService.notifyErrors(error);
                }
            );
        }
    } // register

} // RegisterComponent
