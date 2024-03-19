import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
})
export class IssuesComponent implements OnInit {
  issues: Issue[] = [];

  constructor(private issueService: IssueService) {}

  ngOnInit() {
    this.issues = this.issueService.getIssues();
  }

  onCloseIssue(issue: Issue) {
    issue.status = 'Closed';
  }

  onDeleteIssue(id: string) {
    this.issueService.deleteIssueById(id);
    this.issues = this.issueService.getIssues();
  }

  getStatusClass(status: string) {
    return status === 'Open' ? 'status-open' : 'status-closed';
  }
}
