import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GithubProfileCardComponent } from './github-profile-card.coponent';

@Component({
    selector: 'app-github-profile-list',
    imports: [GithubProfileCardComponent],
    template: `
        <div class="header">
            <h1>Github Profile List</h1>
        </div>
        @for (username of usernames; track username) {
            <app-github-profile-card [username]="username"/>
        }
    `,
    styles: `
        :host {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 0 2rem;
        }

        div.header {
            grid-column: 1 / -1;
            text-align: center;
            padding: 0.75rem;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubProfileListComponent {
    readonly usernames = ['johnsoncodehk', 'antfu', 'railsstudent', 'danielkellyio', 'hootlex', 'MooseSaeed'];   
}
