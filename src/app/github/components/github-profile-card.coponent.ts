import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { GithubProfile } from '../types/github-profile.type';

@Component({
    selector: 'app-github-profile-card',
    templateUrl: './github-profile-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubProfileCardComponent {
    username = input.required<string>();

    profileResource = httpResource<GithubProfile>(() => this.username() ? { 
            url: `https://api.github.com/users/${this.username()}`,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`
            }
        }: undefined, {
        equal: (a, b) => a?.login === b?.login,
    });

    profile = computed(() => this.profileResource.hasValue() ? this.profileResource.value() : undefined);

    error = computed(() => this.profileResource.error()?.message || '');
}
