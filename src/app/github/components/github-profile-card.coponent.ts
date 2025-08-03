import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { GithubProfile } from '../types/github-profile.type';

@Component({
    selector: 'app-github-profile-card',
    template: `
        @let status = profileResource.status();
        @if (status === 'loading') {
            <p>Loading profile...</p>
        } @else if (status === 'error') {
            <p>Error loading profile: {{ error() }}</p>
        } @else {
            @if (profile(); as profile) {
                <div>
                    <img [src]="profile.avatar_url" [attr.alt]="profile.name" class="avatar" />
                    <p>Username: {{ profile.login }}</p>
                    <p>Name: {{ profile.name }}</p>
                    <p>Bio: {{ profile.bio || 'N/A' }}</p>
                    <p>Followers: {{ profile.followers }}</p>
                    <p>Following: {{ profile.following }}</p>
                    <p>Public Repos: {{ profile.public_repos }}</p>
                    <a [href]="profile.html_url" target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            }
        }
    `,
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
