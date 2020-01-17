import { Activity } from 'src/app/activity/shared/activity.model';

/**
 * Track data.
 * This entity contains all information about a track.
 */
export class Track
{
    id: string;             // unique identifier
    startedAt: Date;        // starting date
    title: string;          // title
    description: string;    // description
    activity: Activity;     // activity type
    duration: Date;         // full duration time
    distance: number;       // full distance in kilometers
    ascent: number;         // full ascent in meters
    createdAt: Date;        // creation date
} // Track
