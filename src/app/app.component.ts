import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GithubProfileListComponent } from './github/components/github-profiles.component';

@Component({
  selector: 'app-root',
  imports: [GithubProfileListComponent],
  template: '<app-github-profile-list />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
