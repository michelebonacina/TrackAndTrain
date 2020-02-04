/**
 * Breadcrumb level, for mananaging label and link to each breadcrumb level.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
export class BreadcrumbLevel
{

    name: string;   // name of the breadcrumb level
    link: string;   // link for opening level, null if not linkable

    /**
     * 
     * @param name level name
     * @param link level link
     */
    constructor(name, link)
    {
        this.name = name;
        this.link = link;
    } // constructor

} // BreadcrumbLevel
