import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Track } from './track.model';

@Injectable({
    providedIn: 'root'
})
export class TrackService
{

    // == fields ==
    private tracks: Track[] = [
        {
            id: 1,
            date: '01-01-2020',
            time: '12:00',
            description: 'Monte Misma',
            activity: 'Mountain Bike',
            duration: 150,
            distance: 34,
            ascent: 600
        },
        {
            id: 2,
            date: '02-01-2020',
            time: '12:00',
            description: 'Monte Misma',
            activity: 'Mountain Bike',
            duration: 150,
            distance: 34,
            ascent: 600
        },
        {
            id: 3,
            date: '03-01-2020',
            time: '12:00',
            description: 'Monte Misma',
            activity: 'Mountain Bike',
            duration: 150,
            distance: 34,
            ascent: 600
        },
    ];

    // == constructors ==
    constructor() { } // constructor

    // == public methods ==
    // get all tracks
    public getTracks(): Observable<Track[]>
    {
        const trackObservable = new Observable<Track[]>(
            (observer) =>
            {
                setTimeout(
                    () =>
                    {
                        observer.next(this.tracks);
                    }
                    , 2000)
            }
        );
        return trackObservable;
    } // getTracks

    // get specific track by his id
    public getTrackById(id: number) {
        const trackObservable = new Observable<Track>(
            (observer) =>
            {
                setTimeout(
                    () =>
                    {
                        observer.next(this.tracks[1]);
                    }
                    , 2000)
            }
        );
        return trackObservable;
    } // getTrackById

} // TrackService
