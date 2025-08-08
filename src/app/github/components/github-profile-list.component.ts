import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubProfileCardComponent } from './github-profile-card.coponent';

@Component({
    selector: 'app-github-profile-list',
    imports: [GithubProfileCardComponent],
    template: `
        <div class="header">
            <h1 class="text-3xl">Github Profile List (Angular Ver.)</h1>
        </div>
        @for (username of usernames(); track username) {
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
    usernames = input.required<string[]>();   
}
