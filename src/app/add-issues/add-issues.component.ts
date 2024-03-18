import { Component } from '@angular/core';
import { IssueService } from '../issue.service';
import { Issue } from '../issue';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-issues',
  templateUrl: './add-issues.component.html',
  styleUrls: ['./add-issues.component.scss'],
})
export class AddIssuesComponent {
  descriptionControl = new FormControl('');
  severityControl = new FormControl('');
  assigneeControl = new FormControl('');

  severitiesList = ['Low', 'Medium', 'High'];

  constructor(private issueService: IssueService) {}

  descriptionChanged(event: any) {
    this.descriptionControl.setValue(event.target.value);
  }

  severityChanged(event: any) {}

  assigneeChanged(event: any) {}

  onSubmit() {
    if (
      this.assigneeControl.value &&
      this.descriptionControl.value &&
      this.severityControl.value
    ) {
      this.issueService.addIssue({
        assigned: this.assigneeControl.value,
        description: this.descriptionControl.value,
        severity: this.severityControl.value,
        status: 'Open',
      });
    }

    this.clearForm();
  }

  clearForm() {}
}
