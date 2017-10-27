
export abstract class SecurityComponent {
    protected _roles: string[];
    constructor(roles: string[]) {
        this._roles = roles;
    }
}