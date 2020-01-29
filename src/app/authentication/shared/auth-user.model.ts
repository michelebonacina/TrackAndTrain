/**
 * Authenticated user.
 * This entity contains all information of the authenticated user.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
export class AuthUser
{
    id: string;                 // identifier
    username: string;           // username
    email: string;              // user email, used for login
    password: string;           // password
    passwordConfirm: string;    // retyped password for confirmation
} // AuthUser
