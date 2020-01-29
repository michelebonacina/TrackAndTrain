import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationService } from './shared/authentication.service';


// authentication routing
const routes: Routes = [
    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    }
];

/**
 * Track module.
 * Main module for authentication management.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        AuthenticationComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        AuthenticationService
    ]
})
export class AuthenticationModule { } // authenticationModule
