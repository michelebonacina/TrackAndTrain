import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Track } from './track.model';
import { ActivityService } from 'src/app/activity/shared/activity.service';

/**
 * Track Service.
 * Contains operation for track management.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Injectable({
    providedIn: 'root'
})
export class TrackService
{
    /**
     * Create a new track service.
     * @param httpClient client for API invocation
     * @param activityService service for activity management
     */
    constructor(
        private httpClient: HttpClient,
        private activityService: ActivityService
    ) { } // constructor

    /**
     * Convert a track received from API response into a managed track.
     * @param apiTrack track from API
     * @return track
     */
    public getTrackFromAPI(apiTrack: any): Track
    {
        // get data from api track
        let track: Track = null;
        if (apiTrack)
        {
            track = new Track();
            track.id = apiTrack._id;
            track.startedAt = apiTrack.startedAt;
            track.title = apiTrack.title;
            track.description = apiTrack.description;
            track.activity = this.activityService.getActivityFromAPI(apiTrack.activity);
            track.duration = apiTrack.duration;
            track.distance = apiTrack.distance;
            track.ascent = apiTrack.ascent;
            track.createdAt = apiTrack.createdAt;
        }
        // return track
        return track;
    } // getTrackFromAPI

    /**
     * Convert a managed track into a track to be sended via API.
     * @param track track to be converted
     * @returns API track
     */
    public setTrackToAPI(track: Track): any
    {
        // set data to api track
        let apiTrack = null;
        if (track)
        {
            // track is defined
            // only modificable field have to be sended to API
            apiTrack = {};
            apiTrack._id = track.id;
            apiTrack.title = track.title;
            apiTrack.description = track.description;
            apiTrack.activity = "n.d."; // TODO
        }
        // return api track
        return apiTrack;
    } // setTrackToAPI    

    /**
     * Load all tracks from persistence.
     * @returns observable tracks list
     */
    public getTracks(): Observable<Track[]>
    {
        // return track list
        return new Observable<Track[]>(
            (observer) => 
            {
                // list tracks
                this.httpClient.get('/api/v1/track').subscribe(
                    (findedTracks: any[]) =>
                    {
                        // create track list
                        const tracks: Track[] = [];
                        findedTracks.forEach(
                            (findedTrack: any) =>
                            {
                                tracks.push(this.getTrackFromAPI(findedTrack));
                            }
                        );
                        // return tracks
                        observer.next(tracks);
                        observer.complete();
                    }
                );

            }
        );
    } // getTracks

    /**
     * Load a track from persistence.
     * @param id track indentifier
     * @returns observable track
     */
    public getTrackById(id: string): Observable<Track>
    {
        return new Observable<Track>(
            (observer) =>
            {
                // get track
                this.httpClient.get('/api/v1/track/' + id).subscribe(
                    (findedTrack: any) =>
                    {
                        observer.next(this.getTrackFromAPI(findedTrack));
                        observer.complete();
                    }
                );
            }
        );
    } // getTrackById

} // TrackService
