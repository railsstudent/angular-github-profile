import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { createRequest } from '../create-github-request';
import { GithubProfile } from '../types/github-profile.type';

@Component({
    selector: 'app-github-profile-card',
    templateUrl: './github-profile-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubProfileCardComponent {
    username = input.required<string>();

    profileResource = httpResource<GithubProfile>(() => createRequest(this.username()), {
        equal: (a, b) => a?.login === b?.login,
    });

    profile = computed(() => this.profileResource.hasValue() ? this.profileResource.value() : undefined);

    error = computed(() => this.profileResource.error()?.message || '');
}
