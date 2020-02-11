import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WaypointTypeService } from '../shared/waypoint-type.service';
import { CommonService } from 'src/app/common/shared/common.service';
import { BreadcrumbLevel } from 'src/app/common/shared/breadcrumb-level';
import { WaypointType } from '../shared/waypoint-type.model';
import { MessageService } from 'src/app/common/shared/message.service';
import { Note } from 'src/app/common/shared/note';

/**
 * Waypoint type create compoment.
 * This components manages waypoint type creation.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Component({
    selector: 'tat-waypoint-type-create',
    templateUrl: './waypoint-type-create.component.html',
    styleUrls: ['./waypoint-type-create.component.scss']
})
export class WaypointTypeCreateComponent implements OnInit
{

    waypointTypeForm: FormGroup;    // waypoint type form data mapper

    /**
     * Create a new component.
     * @param formBuilder form management
     * @param router router for navigation management
     * @param activityService service for waypoint type management
     * @param commonService service for generic operations
     * @param messageService service for messages and errors management
     */
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private waypointTypeService: WaypointTypeService,
        private commonService: CommonService,
        private messageService: MessageService
    ) { } // constructor

    /**
     * Initialize component
     */
    ngOnInit()
    {
        // show breadcrumb level
        this.commonService.addBreadcrumbLevel(new BreadcrumbLevel("New", "/waypoint-type/new"));
        // create waypoint type form
        this.waypointTypeForm = this.formBuilder.group(
            {
                code: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
                name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
                iconName: [null],
                color: [null]
            }
        );
    } // ngOnInit

    /**
     * Create waypoint type.
     * Checks waypoint type form data and if all is right create the new waypoint type to be saved, 
     * then calls service for creating it.
     * If there's no errors, redirect to waypoint type list page.
     */
    create()
    {
        // check form data
        if (this.waypointTypeForm.valid)
        {
            // the form data are correct
            // create the new waypoint type
            const waypointType: WaypointType = new WaypointType();
            waypointType.code = this.waypointTypeForm.controls.code.value;
            waypointType.name = this.waypointTypeForm.controls.name.value;
            waypointType.iconName = this.waypointTypeForm.controls.iconName.value;
            waypointType.color = this.waypointTypeForm.controls.color.value;
            // create the new waypoint type
            this.waypointTypeService.createWaypointType(waypointType).subscribe(
                (waypointType: WaypointType) =>
                {
                    // waypoint type created
                    this.messageService.notifyMessages([new Note('New Waypoint type', 'Waypoint Type ' + waypointType.name + ' successfully created.')]);
                    // go to waypoint type list page
                    this.router.navigate(['/waypoint-type']);
                }
            );
        }
    } // save

} // WaypointTypeCreateComponent
