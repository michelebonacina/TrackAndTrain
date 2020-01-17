import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Track } from './track.model';
import { CommonService } from 'src/app/common/shared/common.service';

@Injectable({
    providedIn: 'root'
})
export class TrackService
{
    /**
     * Create a new track service.
     * @param httpClient client for API invocation
     */
    constructor(
        private httpClient: HttpClient
    ) { } // constructor

    // get track from api response
    public getTrackFromAPI(apiTrack: any): Track
    {
        // get data from api track
        let track = null;
        if (apiTrack)
        {
            track = new Track();
            track.id = apiTrack._id;
            track.date = apiTrack.startedAt;
            track.title = apiTrack.title;
            track.description = apiTrack.description;
            track.activity = "n.d."; // TODO
            track.duration = apiTrack.duration;
            track.distance = apiTrack.distance;
            track.ascent = apiTrack.ascent;
            track.createdAt = apiTrack.createdAt;
        }
        // return track
        return track;
    } // getTrackFromApi

    // set track from sending to api
    public setTrackToAPI(track: Track): any
    {
        // set data to api track
        let apiTrack = null;
        if (track)
        {
            apiTrack = {};
            apiTrack._id = track.id;
            apiTrack.title = track.title;
            apiTrack.description = track.description;
            apiTrack.activity = "n.d."; // TODO
        }
        // return api track
        return apiTrack;
    } // getTrackFromApi    

    // get all tracks
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
                            (findedTrack) =>
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

    // get specific track by his id
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
