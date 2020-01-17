import { Time } from '@angular/common';

/**
 * Track data.
 * This entity contains all information about a track.
 */
export class Track
{
    id: string;             // unique identifier
    date: Date;             // starting date
    title: string;          // title
    description: string;    // description
    activity: string;       // activity type
    duration: Time;         // full duration time
    distance: number;       // full distance in kilometers
    ascent: number;         // full ascent in meters
    createdAt: Date;        // creation date
} // Track
