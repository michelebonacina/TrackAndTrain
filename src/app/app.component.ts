import { Component } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'tat-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent
{
    faBars = faBars;
    title = 'TrackAndTrain';
}
