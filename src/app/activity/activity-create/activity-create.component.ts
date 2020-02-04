import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Activity } from '../shared/activity.model';
import { ActivityService } from '../shared/activity.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/shared/common.service';
import { BreadcrumbLevel } from 'src/app/common/shared/breadcrumb-level';

/**
 * Activity create compoment.
 * This components manages activity creation.
 * @author michele bonacina
 * @since 0.0.1.
 * @version 0.0.1.
 */
@Component({
    selector: 'tat-activity-create',
    templateUrl: './activity-create.component.html',
    styleUrls: ['./activity-create.component.scss']
})
export class ActivityCreateComponent implements OnInit
{

    activityForm: FormGroup;    // activity form data mapper

    /**
     * Create a new component.
     * @param formBuilder form management
     * @param router router for navigation management
     * @param activityService service for activity management
     * @param commonService service for generic operations
     */
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private activityService: ActivityService,
        private commonService: CommonService
    ) { } // constructor

    /**
     * Initialize component
     */
    ngOnInit()
    {
        // show breadcrumb level
        this.commonService.addBreadcrumbLevel(new BreadcrumbLevel("New", "/activity/new"));
        // create activity form
        this.activityForm = this.formBuilder.group(
            {
                code: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
                name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
                iconName: [null],
                color: [null]
            }
        );
    } // ngOnInit

    /**
     * Create activity.
     * Checks activity form data and if all is right create the new activity to be saved, 
     * then calls service for creating it.
     * If there's no errors, redirect to activites list page.
     */
    create()
    {
        // check form data
        if (this.activityForm.valid)
        {
            // the form data are correct
            // create the new activity
            const activity: Activity = new Activity();
            activity.code = this.activityForm.controls.code.value;
            activity.name = this.activityForm.controls.name.value;
            activity.iconName = this.activityForm.controls.iconName.value;
            activity.color = this.activityForm.controls.color.value;
            // create the new activity
            this.activityService.createActivity(activity).subscribe(
                (activity: Activity) =>
                {
                    // activity created
                    // go to activity list page
                    this.router.navigate(['/activity']);
                }
            );
        }
    } // save

} // ActivityCreateComponent
