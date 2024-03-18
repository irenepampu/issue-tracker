import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issues: Issue[] = [];

  getIssues() {
    return this.issues;
  }

  addIssue(issue: Issue) {
    this.issues.push({
      ...issue,
      id: this.getIssueId(),
    });
  }

  private getIssueId(): string {
    return Math.random().toString(36).substr(2, 5);
  }

  deleteIssueById(id: string) {
    this.issues = this.issues.filter((issue) => issue.id !== id);
  }
}
