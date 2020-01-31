import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationService } from './shared/authentication.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthenticationGuard } from './shared/authentication.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/token.interceptor';


// authentication routing
const routes: Routes = [
    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
            { path: 'login', component: LoginComponent, canActivate: [AuthenticationGuard] },
            { path: 'register', component: RegisterComponent, canActivate: [AuthenticationGuard] },
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
        ReactiveFormsModule,
        FontAwesomeModule
    ],
    providers: [
        AuthenticationService,
        AuthenticationGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ]
})
export class AuthenticationModule { } // authenticationModule
