import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubProfileCardComponent } from './github-profile-card.coponent';

@Component({
    selector: 'app-github-profile-list',
    imports: [GithubProfileCardComponent],
    template: `
        <div class="p-[0.75rem] col-span-full text-center">
            <h1 class="text-3xl">Github Profile List (Angular Ver.)</h1>
        </div>
        @for (username of usernames(); track username) {
            <app-github-profile-card [username]="username"/>
        }
    `,
    styles: `
        @reference "../../../styles.css";

        :host {
            @apply grid grid-cols-2 pt-0 pb-0 pl-[2rem] pr-[2rem]
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubProfileListComponent {
    usernames = input.required<string[]>();   
}
