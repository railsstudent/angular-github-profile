import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GithubProfileListComponent } from './github/components/github-profile-list.component';

@Component({
  selector: 'app-root',
  imports: [GithubProfileListComponent],
  template: `
    <div id="app">
      <app-github-profile-list [usernames]="usernames" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly usernames = ['johnsoncodehk', 'antfu', 'railsstudent', 'danielkellyio', 'hootlex', 'MooseSaeed'];   
}
