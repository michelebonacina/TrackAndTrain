/**
 * Note, for showing info and details to the user.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
export class Note
{

    title: string;          // note title
    details: string;        // note details

    /**
     * Create a new note.
     * @param title note title
     * @param message note details
     */
    constructor(title: string = "Unknown error", details: string = "Something goes wrong")
    {
        this.title = title;
        this.details = details;
    } // constructor

} // Note
